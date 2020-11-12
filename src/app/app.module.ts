import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';

import { appRoutingProviders, routing } from './app-routing.module';
import { MenuComponent } from './../components/menu/menu.component';
import { NumerosComponent } from './../components/numeros/numeros.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NumerosComponent,
    ListaproductosComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }