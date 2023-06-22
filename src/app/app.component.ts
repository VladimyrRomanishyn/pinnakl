import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountriesState } from './models/state.models';
import { filter } from 'rxjs/operators';
import { loadData, setAvailableCitiesLabel, setSelectedCitiesLabel, setSelectedCountriesLabel, updateCities, updateSelectedCities, updateSelectedCountries } from './state/actions';
import { Observable } from 'rxjs';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  data$!: Observable<CountriesState>;

  constructor(
    private store: Store<{ countries: CountriesState }>,
    private countriesSvc: CountriesService
  ) { }


  countrySelect(event: MultiSelectChangeEvent): void {
    const availableCities = this.countriesSvc.countCities(event.value);
    const cities = this.countriesSvc.getCities(event.value);

    this.store.dispatch(updateSelectedCities({ selectedCities: [] }));
    this.store.dispatch(setSelectedCitiesLabel({ selectedCities: 0 }));
    this.store.dispatch(updateSelectedCountries({ selectedCountries: event.value }));
    this.store.dispatch(setSelectedCountriesLabel({ selectedCountries: event.value.length || 0 }));
    this.store.dispatch(setAvailableCitiesLabel({ availableCities }));
    this.store.dispatch(updateCities({ cities }));
  }

  citySelect(event: MultiSelectChangeEvent, data: CountriesState): void {
    this.store.dispatch(updateSelectedCities({ selectedCities: event.value }));
    this.store.dispatch(setSelectedCitiesLabel({ selectedCities: event.value.length || 0 }));
    this.store.dispatch(setAvailableCitiesLabel({ availableCities: (data.cities?.length || 0) - event.value.length }));
  }

  ngOnInit(): void {
    this.data$ = this.store.select('countries')
      .pipe(
        filter((state: CountriesState) => {
          if (!state.countries) {
            this.store.dispatch(loadData())
          }
          return !!state.countries;
        })
      );
  }
}