import { City, Country, CountryEntity, DataRecord } from './models/country.models';


export function reduceData(data: DataRecord[]): Country[] {
    return Object.entries(data.reduce((acc, value) => {
        const city = new City(value);

        acc[value.country] = acc[value.country] ?? {};
        acc[value.country].cities = Array.isArray(acc[value.country].cities) ? acc[value.country].cities.concat([city]) : [city]

        return acc;
    }, {} as any)).map((e) => (new Country(e as CountryEntity)));
}

export function countCities(data: Country[]): number {
    return data.reduce((acc, value) => {
        return acc += value.cities.length, acc;
    }, 0);
}

export function getCities(data: Country[]): City[] {
    return data.reduce((acc, value) => {
        return acc = acc.concat(value.cities), acc;
    }, [] as City[]);
}