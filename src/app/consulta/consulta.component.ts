import { Pedido } from './../_modelo/pedido';
import { PedidoService } from './../_service/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private servicioPedido: PedidoService) { }

  ngOnInit() {
  }

  buscarFechaUnica(fecha: Date){
    this.servicioPedido.listarPorFechaUnica(fecha).subscribe(data =>{
      this.pedidos = data;
    });
  }

  buscarFechaRango(fecha: Date[]){
    this.servicioPedido.listarPorFechaRango(fecha).subscribe(data =>{
      this.pedidos = data;
    });
  }
}
