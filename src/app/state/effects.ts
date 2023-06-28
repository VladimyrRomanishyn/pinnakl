import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { LoadDataActionLabel, SaveDataActionLabel, SelectCityActionLabel, SelectCountryActionLabel, SetAvailableLabelName, SetSelectedCitiesLabelName, SetSelectedCountriesLabelName, SetTotalCitiesLabelName, SetTotalCountriesLabelName, UdateSelectedCountriesActionLabel, UpdateCitiesLabel, UpdateSelectedCitiesLabel } from './actions';
import { CountriesDataService } from '../services/countries.service';
import { of } from 'rxjs';
import { countCities, getCities, reduceData, CountriesState, DataRecord } from '../core';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { Store } from '@ngrx/store';

@Injectable()
export class CountriesEffects {

    loadCities$ = createEffect(() => this.actions$.pipe(
        ofType(LoadDataActionLabel),
        switchMap(() => this.countriesDataSvc.fetchData()),
        switchMap((payload: DataRecord[]) => {
            const countries = reduceData(payload);
            const totalCountries = countries.length;
            const totalCities = countCities(countries);

            return of(
                ({ type: SaveDataActionLabel, countries }),
                ({ type: SetTotalCountriesLabelName, totalCountries }),
                ({ type: SetTotalCitiesLabelName, totalCities }),
            )
        }),
        catchError((error: Error) => {
            console.log("Error: ", error);
            return of(({ type: SaveDataActionLabel, counties: [] }))
        })
    ));

    selectCountry$ = createEffect(() => this.actions$.pipe(
        ofType(SelectCountryActionLabel),
        switchMap(({ event }: { event: MultiSelectChangeEvent }) => {
            const availableCities = countCities(event.value);
            const cities = getCities(event.value);

            return of(
                ({ type: UpdateSelectedCitiesLabel, selectedCities: [] }),
                ({ type: SetSelectedCitiesLabelName, selectedCities: 0 }),
                ({ type: UdateSelectedCountriesActionLabel, selectedCountries: event.value }),
                ({ type: SetSelectedCountriesLabelName, selectedCountries: event.value.length || 0 }),
                ({ type: SetAvailableLabelName, availableCities }),
                ({ type: UpdateCitiesLabel, cities }),
            );
        })
    ));

    selectCity$ = createEffect(() => this.actions$.pipe(
        ofType(SelectCityActionLabel),
        withLatestFrom(this.store.select('countries')),
        switchMap(([{ event }, state]: [action: { event: MultiSelectChangeEvent }, state: CountriesState,]) => {

            return of(
                ({ type: UpdateSelectedCitiesLabel, selectedCities: event.value }),
                ({ type: SetSelectedCitiesLabelName, selectedCities: event.value.length || 0 }),
                ({ type: SetAvailableLabelName, availableCities: (state.cities?.length || 0) - event.value.length }),
            );
        })
    ));

    constructor(
        private actions$: Actions,
        private countriesDataSvc: CountriesDataService,
        private store: Store<{ countries: CountriesState }>
    ) { }
}