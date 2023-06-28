import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataRecord } from '../core';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<DataRecord[]> {
    return this.http.get<DataRecord[]>(
      'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    );
  }
}