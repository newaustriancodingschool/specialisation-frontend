import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppPsetJavascriptModule} from './app-pset-javascript/app-pset-javascript.module';
import {AppPsetHtmlandcssModule} from './app-pset-htmlandcss/app-pset-htmlandcss.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {routes} from './app-routing/routes';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPsetJavascriptModule,
    AppPsetHtmlandcssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
