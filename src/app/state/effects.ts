import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LoadDataActionLabel, SaveDataActionLabel } from './actions';
import { CountriesService } from '../services/countries.service';
import { DataRecord } from '../models/state.models';

@Injectable()
export class CountriesEffects {

    loadCities$ = createEffect(() => this.actions$.pipe(
        ofType(LoadDataActionLabel),
        tap(() => {
            console.log('hello')
        }),
        mergeMap(() => this.countriesService.fetchData()
            .pipe(
                map((payload: DataRecord[]) => ({ type: SaveDataActionLabel, payload })),
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private countriesService: CountriesService
    ) { }
}