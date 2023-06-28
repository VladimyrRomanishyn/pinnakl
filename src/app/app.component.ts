import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesState } from './core/src/models/country.models';
import { filter } from 'rxjs/operators';
import { loadData, selectCity, selectCountry } from './state/actions';
import { Observable } from 'rxjs';
import { MultiSelectChangeEvent } from 'primeng/multiselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  data$!: Observable<CountriesState>;

  constructor(
    private store: Store<{ countries: CountriesState }>
  ) { }


  countrySelect(event: MultiSelectChangeEvent): void {
    this.store.dispatch(selectCountry({ event }));
  }

  citySelect(event: MultiSelectChangeEvent): void {
    this.store.dispatch(selectCity({ event }))
  }

  ngOnInit(): void {
    this.data$ = this.store.select('countries')
      .pipe(
        filter((state: CountriesState) => {
          if (!state.countries?.length) {
            this.store.dispatch(loadData())
          }
          return !!state.countries;
        })
      );
  }
}