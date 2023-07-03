import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsData, EventService } from './event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltertabComponent } from './filtertab/filtertab.component';
import { SearchComponent } from './search/search.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponentComponent,
    FiltertabComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [FiltertabComponent, EventService, CardsData],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public FiltertabComponent: FiltertabComponent) {}
}
