import { Pedido } from './../../../_modelo/pedido';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() pedido: Pedido;


  constructor() { }

  ngOnInit() {
  }

}
