import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countriesReducer } from './state/reducer';
import { CountriesEffects } from './state/effects';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MultiSelectModule,
    StoreModule.forRoot({ countries: countriesReducer }),
    //EffectsModule.forRoot([CountriesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
