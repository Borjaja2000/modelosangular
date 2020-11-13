import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';

import { appRoutingProviders, routing } from './app-routing.module';
import { MenuComponent } from './../components/menu/menu.component';
import { NumerosComponent } from './../components/numeros/numeros.component';
import { ListaproductosComponent } from './../components/listaproductos/listaproductos.component';
import { CocheComponent } from '../components/coche/coche.component';
import { ConcesionarioComponent } from '../components/concesionario/concesionario.component';
import { HijocontadorComponent } from '../components/hijocontador/hijocontador.component';
import { PadrecontadoresComponent } from '../components/padrecontadores/padrecontadores.component';
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NumerosComponent,
    ListaproductosComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijocontadorComponent,
    PadrecontadoresComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }