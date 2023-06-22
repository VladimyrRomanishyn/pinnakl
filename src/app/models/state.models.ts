export interface DataRecord {
    country: string;
    geonameid: number;
    name: string;
    subcountry: string;
}

export interface City {
    geonameid: number;
    name: string;
    subcountry: string;
}

export interface Country {
    cities: City[]
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
    selectedCountries: Country[] | undefined;
}