import { Component, OnInit } from '@angular/core';
import {Producto} from './../../models/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
public producto:Producto;
  constructor() { 
    this.producto = new Producto("Constructor!!!","Cacao",15); 
    //this.producto.nombre = "Leche";
   // this.producto.imagen = "lalala";
    //this.producto.precio = 3;
    
    
  }

  ngOnInit(): void {
  }

}
