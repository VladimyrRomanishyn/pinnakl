import { createAction, props } from '@ngrx/store';
import { Country } from '../models/state.models';
// Countries Actions
export const LoadDataActionLabel = '[Countries] Load Data';
export const SaveDataActionLabel = '[Countries] Save Data';

export const loadData = createAction(LoadDataActionLabel);
export const saveData = createAction(
    SaveDataActionLabel,
    props<{ countries: Country[] }>()
);
export const updateSelectedCountries = createAction(
    '[Countries] Update Selected',
    props<{ selectedCountries: Country[] }>()
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