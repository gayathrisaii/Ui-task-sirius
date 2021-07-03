import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppmoduleRoutingModule } from '../app-module/appmodule-routing.module';
import { CommonModule } from '@angular/common';
import { AppindexComponent } from './components/appindex/appindex.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppindexComponent],
  imports: [
    BrowserModule,
    AppmoduleRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppindexComponent]
})
export class AppmoduleModule { }