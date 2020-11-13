import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-contador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css']
})
export class HijocontadorComponent implements OnInit {
  @Input() inicio: number;
  @Input() idContador: number;
  @Output() recibirIdContador = new EventEmitter();
  public numero:number;
  public mensaje: string;

  //REALIZAMOS LA LLAMADA AL PADRE CUANDO DESEEMOS
  //EL METODO DE LLAMADA TAMBIEN TIENE QUE RECIBIR EVENT
  //AUNQUE NO LO UTILICEMOS

  incrementarContador(event){
    this.numero  =this.numero + 1;
    this.mensaje = "Contador en " + this.numero;
    this.recibirIdContador.emit(this.idContador);
  }

  constructor() { }

  ngOnInit(): void {
    this.numero = this.inicio;
    this.mensaje = "Contador Id: " + this.idContador + ", Valor inicial: " + this.inicio;
  }
}
