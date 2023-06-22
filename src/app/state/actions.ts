import { createAction, props } from '@ngrx/store';
import { City, Country } from '../models/state.models';

export const LoadDataActionLabel = '[Countries] Load Data';
export const SaveDataActionLabel = '[Countries] Save Data';
export const setTotalCountriesLabelName = '[Text Labels] Set Total Countries';
export const setTotalCitiesLabelName = '[Text Labels] Set Total Sities';
// Countries Actions
export const loadData = createAction(LoadDataActionLabel);
export const saveData = createAction(
    SaveDataActionLabel,
    props<{ countries: Country[] }>()
);
export const updateSelectedCountries = createAction(
    '[Countries] Update Selected',
    props<{ selectedCountries: Country[] }>()
);
// Cities Actions
export const updateSelectedCities = createAction(
    '[Cities] Update Selected',
    props<{ selectedCities: City[] }>()
);
export const updateCities = createAction(
    '[Cities] Update',
    props<{ cities: City[] }>()
);
// Labels Actions
export const setSelectedCountriesLabel = createAction(
    '[Text Labels] Set Selected Countries',
    props<{ selectedCountries: number }>()
);

export const setTotalCountriesLabel = createAction(
    '[Text Labels] Set Total Countries',
    props<{ totalCountries: number }>()
);

export const setAvailableCitiesLabel = createAction(
    '[Text Labels] Set Available Sities',
    props<{ availableCities: number }>()
);

export const setTotalCitiesLabel = createAction(
    '[Text Labels] Set Total Sities',
    props<{ totalCities: number }>()
);

export const setSelectedCitiesLabel = createAction(
    '[Text Labels] Set Selected Sities',
    props<{ selectedCities: number }>()
);