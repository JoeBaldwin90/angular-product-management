import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,         // Feature modules
    AppRoutingModule       // Routing module
  ],
  declarations: [
    AppComponent,         // Root app component
    WelcomeComponent      // Homepage
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
