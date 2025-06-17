// @
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// SERVICES
import { CodWarzoneCheatersForecastJsonService } from './services/get/cod-warzone-cheaters-forecast-json.service';

// COMPONENTS
import { AppComponent } from './app.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
    CodWarzoneCheatersForecastJsonService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }