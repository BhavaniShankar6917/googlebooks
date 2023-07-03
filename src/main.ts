import { FilterComponent } from './app/filter/filter.component';
import { AppComponent } from './app/app.component';
import { FiltertabComponent } from './app/filtertab/filtertab.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { SearchComponent } from './app/search/search.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
// bootstrapApplication(FilterComponent).catch((err) => console.log(err));
