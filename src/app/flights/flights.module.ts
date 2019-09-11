import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FlightSearchComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FlightsModule { }
