import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export type AuthorizationStatus = 'Unknown' | 'Auth' | 'NoAuth';

export const changeCity = createAction<string>('offers/changeCity');
export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setUserEmail = createAction<string | null>('user/setUserEmail');
