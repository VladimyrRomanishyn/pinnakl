export interface DataRecord {
    country: string;
    geonameid: number;
    name: string;
    subcountry: string;
}

export class City {
    subcountry: string;
    name: string;

    constructor(data: DataRecord) {
        this.subcountry = data.subcountry;
        this.name = data.name;
    }
}

export type CountryEntity = [string, { cities: City[] }]
export class Country {
    cities: City[];
    name: string;

    constructor(payload: CountryEntity) {
        this.name = payload[0];
        this.cities = payload[1].cities;
    }
}

export interface TextLabels {
    selectedCountries: number | undefined;
    totalCountries: number | undefined;
    availableCities: number | undefined;
    totalCities: number | undefined;
    selectedCities: number | undefined;
}

export interface CountriesState {
    labels: TextLabels;
    countries: Country[] | undefined;
    cities: City[] | undefined;
    selectedCountries: Country[] | undefined;
    selectedCities: City[] | undefined;
}