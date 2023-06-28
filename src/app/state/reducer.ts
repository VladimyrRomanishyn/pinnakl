import { createReducer, on } from '@ngrx/store';
import { CountriesState } from '../core/src/models/country.models';
import * as actions from './actions';

export const initialState: CountriesState = {
    labels: {
        selectedCountries: 0,
        totalCountries: 0,
        availableCities: 0,
        totalCities: 0,
        selectedCities: 0
    },
    countries: [],
    cities: [],
    selectedCountries: [],
    selectedCities: []
};

const _countriesReducer = createReducer(initialState,
    on(actions.saveData, (state: CountriesState, { countries }) =>
        ({ ...state, countries })
    ),
    on(actions.updateCities, (state: CountriesState, { cities }) =>
        ({ ...state, cities })
    ),
    on(actions.updateSelectedCountries, (state: CountriesState, { selectedCountries }) =>
        ({ ...state, selectedCountries })
    ),
    on(actions.updateSelectedCities, (state: CountriesState, { selectedCities }) =>
        ({ ...state, selectedCities })
    ),
    on(actions.setSelectedCountriesLabel, (state: CountriesState, { selectedCountries }) =>
        ({ ...state, labels: { ...state.labels, selectedCountries } })
    ),
    on(actions.setTotalCountriesLabel, (state: CountriesState, { totalCountries }) =>
        ({ ...state, labels: { ...state.labels, totalCountries } })
    ),
    on(actions.setAvailableCitiesLabel, (state: CountriesState, { availableCities }) =>
        ({ ...state, labels: { ...state.labels, availableCities } })
    ),
    on(actions.setTotalCitiesLabel, (state: CountriesState, { totalCities }) =>
        ({ ...state, labels: { ...state.labels, totalCities } })
    ),
    on(actions.setSelectedCitiesLabel, (state: CountriesState, { selectedCities }) =>
        ({ ...state, labels: { ...state.labels, selectedCities } })
    ),
);

export function countriesReducer(state: any, action: any) {
    return _countriesReducer(state, action);
}