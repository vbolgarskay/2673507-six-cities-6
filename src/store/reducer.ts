import { createReducer } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import {
  AuthorizationStatus,
  changeCity,
  loadOffers,
  requireAuthorization,
  setUserEmail,
} from './action';
import { fetchOffersAction } from './api-actions';

export type OffersState = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
};

const initialState: OffersState = {
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
  authorizationStatus: 'Unknown',
  userEmail: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
    });
});
