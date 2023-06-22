import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, Country, CountryEntity, DataRecord } from '../models/state.models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<DataRecord[]> {
    return this.http.get<DataRecord[]>(
      'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    );
  }

  reduceData(data: DataRecord[]): Country[] {
    return Object.entries(data.reduce((acc, value) => {
      const city = new City(value);

      acc[value.country] = acc[value.country] ?? {};
      acc[value.country].cities = Array.isArray(acc[value.country].cities) ? acc[value.country].cities.concat([city]) : [city]

      return acc;
    }, {} as any)).map((e) => (new Country(e as CountryEntity)));
  }

  countCities(data: Country[]): number {
    return data.reduce((acc, value) => {
      return acc += value.cities.length, acc;
    }, 0);
  }

  getCities(data: Country[]): City[] {
    return data.reduce((acc, value) => {
      return acc = acc.concat(value.cities), acc;
    }, [] as City[]);
  }
}