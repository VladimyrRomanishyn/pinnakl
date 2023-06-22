import { createReducer, on } from '@ngrx/store';
import { CountriesState, TextLabels } from '../models/state.models';
import * as actions from './actions';

export const initialState: CountriesState = {
    labels: {
        selectedCountries: undefined,
        totalCountries: undefined,
        availableCities: undefined,
        totalCities: undefined,
        selectedCities: undefined
    },
    countries: undefined,
    selectedCountries: undefined
};

const _countriesReducer = createReducer(initialState,
    on(actions.saveData, (state: CountriesState, update: Partial<CountriesState>) => {
        console.log("Update: ", update);
        return ({ ...state, ...update })}),
    on(actions.updateSelectedCountries, (state: CountriesState, update: Partial<CountriesState>) => ({ ...state, ...update })),
    on(actions.setSelectedCountriesLabel, (state: CountriesState, update: Partial<TextLabels>) => ({ ...state, labels: { ...state.labels, update } })),
    on(actions.setTotalCountriesLabel, (state: CountriesState, update: Partial<TextLabels>) => ({ ...state, labels: { ...state.labels, update } })),
    on(actions.setAvailableCitiesLabel, (state: CountriesState, update: Partial<TextLabels>) => ({ ...state, labels: { ...state.labels, update } })),
    on(actions.setTotalCitiesLabel, (state: CountriesState, update: Partial<TextLabels>) => ({ ...state, labels: { ...state.labels, update } })),
    on(actions.setSelectedCitiesLabel, (state: CountriesState, update: Partial<TextLabels>) => ({ ...state, labels: { ...state.labels, update } })),
);

export function countriesReducer(state: any, action: any) {
    return _countriesReducer(state, action);
}