import { createAction, props } from '@ngrx/store';
import { City, Country } from '../core/src/models/country.models';
import { MultiSelectChangeEvent } from 'primeng/multiselect';

// Effects Actions Lables
export const LoadDataActionLabel = '[Effects] Load Data';
export const SelectCountryActionLabel = '[Effects] Select Country';
export const SelectCityActionLabel = '[Effects] Select City';

// Effects Actions
export const loadData = createAction(LoadDataActionLabel);
export const selectCountry = createAction(
    SelectCountryActionLabel,
    props<{ event: MultiSelectChangeEvent }>()
);
export const selectCity = createAction(
    SelectCityActionLabel,
    props<{ event: MultiSelectChangeEvent }>()
);

// Countries Actions Labels
export const SaveDataActionLabel = '[Countries] Save Data';
export const UdateSelectedCountriesActionLabel = '[Countries] Update Selected';

// Countries Actions
export const saveData = createAction(
    SaveDataActionLabel,
    props<{ countries: Country[] }>()
);
export const updateSelectedCountries = createAction(
    UdateSelectedCountriesActionLabel,
    props<{ selectedCountries: Country[] }>()
);

// Cities Actions Lables
export const UpdateSelectedCitiesLabel = '[Cities] Update Selected';
export const UpdateCitiesLabel = '[Cities] Update';

// Cities Actions
export const updateSelectedCities = createAction(
    UpdateSelectedCitiesLabel,
    props<{ selectedCities: City[] }>()
);
export const updateCities = createAction(
    UpdateCitiesLabel,
    props<{ cities: City[] }>()
);

// Labels Actions Lables
export const SetTotalCountriesLabelName = '[Text Labels] Set Total Countries';
export const SetTotalCitiesLabelName = '[Text Labels] Set Total Sities';
export const SetAvailableLabelName = '[Text Labels] Set Available Sities';
export const SetSelectedCountriesLabelName = '[Text Labels] Set Selected Countries';
export const SetSelectedCitiesLabelName = '[Text Labels] Set Selected Sities';
// Labels Actions
export const setSelectedCountriesLabel = createAction(
    SetSelectedCountriesLabelName,
    props<{ selectedCountries: number }>()
);

export const setTotalCountriesLabel = createAction(
    SetTotalCountriesLabelName,
    props<{ totalCountries: number }>()
);

export const setAvailableCitiesLabel = createAction(
    SetAvailableLabelName,
    props<{ availableCities: number }>()
);

export const setTotalCitiesLabel = createAction(
    SetTotalCitiesLabelName,
    props<{ totalCities: number }>()
);

export const setSelectedCitiesLabel = createAction(
    SetSelectedCitiesLabelName,
    props<{ selectedCities: number }>()
);