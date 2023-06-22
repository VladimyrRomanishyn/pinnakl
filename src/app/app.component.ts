import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { Store } from '@ngrx/store';
import { CountriesState } from './models/state.models';
import { filter } from 'rxjs/operators';
import { loadData } from './state/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private countriesService: CountriesService,
    private store: Store<{ countries: CountriesState }>
  ) { }

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  selectedCities: any = [];

  log(event: any) {
    console.log(event);
    console.log(this.selectedCities);
  }

  ngOnInit(): void {
    this.store.select('countries')
      .pipe(
        filter((state: CountriesState) => {
          if (!state.countries) {
            this.store.dispatch(loadData())
          }
          return !!state.countries; 
        })
      )
      .subscribe(console.log);
  }
}