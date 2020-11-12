import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
  public numeros: Array<number>;
  public collatz: number;
  constructor(
    private _activeRoute: ActivatedRoute
  ) {
    this.numeros = [];
    this.collatz = 0;
   }
  generarCollatz(num) {
    this.numeros = [];
    while (num != 1){
      if (num%2 == 0){
        num = num / 2;
      }else{
        num = (num * 3) + 1;
      }
      this.numeros.push(num);
    }
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      var num = parseInt(params.numero);
      this.collatz = num;
      this.generarCollatz(num);
    });
  }
}
