import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { AppDispatch, RootState } from '.';
import { requireAuthorization, setUserEmail } from './action';
import { dropToken, saveToken } from '../api';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};

type AuthInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

type AuthData = {
  email: string;
  password: string;
};

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  ThunkApiConfig
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>('/six-cities/offers');
  return data;
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  ThunkApiConfig
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<AuthInfo>('/six-cities/login');
    saveToken(data.token);
    dispatch(setUserEmail(data.email));
    dispatch(requireAuthorization('Auth'));
  } catch {
    dispatch(setUserEmail(null));
    dispatch(requireAuthorization('NoAuth'));
  }
});

export const loginAction = createAsyncThunk<void, AuthData, ThunkApiConfig>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthInfo>('/six-cities/login', {
      email,
      password,
    });

    saveToken(data.token);
    dispatch(setUserEmail(data.email));
    dispatch(requireAuthorization('Auth'));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete('/six-cities/logout');
    dropToken();
    dispatch(setUserEmail(null));
    dispatch(requireAuthorization('NoAuth'));
  }
);
