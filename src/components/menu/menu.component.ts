import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public numeros: Array<number>;
  constructor() { 
    this.numeros = [];
  }
  ngOnInit(): void {
    for (var i = 1; i <= 5; i++){
      var aleat = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(aleat);
    }
  }
}
