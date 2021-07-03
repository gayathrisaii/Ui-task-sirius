import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplatemoduleRoutingModule } from './templatemodule-routing.module';
import { BannersectionComponent } from './components/bannersection/bannersection.component';

import { TemplateindexComponent } from './components/templateindex/templateindex.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { QuoteComponent } from './components/quote/quote.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [BannersectionComponent, TemplateindexComponent, WeatherComponent, DestinationsComponent, QuoteComponent, FooterComponent],
  imports: [
    CommonModule,
    TemplatemoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplatemoduleModule { }
