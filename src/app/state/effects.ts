import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { LoadDataActionLabel, SaveDataActionLabel, setTotalCitiesLabelName, setTotalCountriesLabelName } from './actions';
import { CountriesService } from '../services/countries.service';
import { DataRecord } from '../models/state.models';

@Injectable()
export class CountriesEffects {

    loadCities$ = createEffect(() => this.actions$.pipe(
        ofType(LoadDataActionLabel),
        mergeMap(() => this.countriesService.fetchData()
            .pipe(
                switchMap((payload: DataRecord[]) => {
                    const countries = this.countriesService.reduceData(payload);
                    const totalCountries = countries.length;
                    const totalCities = this.countriesService.countCities(countries);
                    
                    return of(
                        ({ type: SaveDataActionLabel, countries }),
                        ({ type: setTotalCountriesLabelName, totalCountries }),
                        ({ type: setTotalCitiesLabelName, totalCities }),
                    )
                }),
                catchError(() => EMPTY)
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private countriesService: CountriesService
    ) { }
}