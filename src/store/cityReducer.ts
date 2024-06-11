import { createReducer, createAction } from '@reduxjs/toolkit';
import thunkFetchMeteo from './thunkFetchMeteo';
import { ICity } from '../@types/city';

// -- STATE INITIAL --
interface CityState {
  cities: ICity[];
}
const initialState: CityState = {
  cities: [],
};

// -- ACTIONS CREATORS --
export const actionAddCity = createAction<string>('ADD_CITY');

// -- REDUCER --
const cityReducer = createReducer(initialState, (builder) => {
  builder.addCase(thunkFetchMeteo.fulfilled, (state, action) => {
    // ajout d'un ville dans le state
    state.cities.push(action.payload);
  });
});

export default cityReducer;
