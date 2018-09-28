import { PedidoService } from './../_service/pedido.service';
import { Detalle } from './../_modelo/detalle';
import { Pedido } from './../_modelo/pedido';
import { Plato } from './../_modelo/plato';
import { Cliente } from './../_modelo/cliente';
import { PlatoService } from './../_service/plato.service';
import { ClienteService } from './../_service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { CompleterData, CompleterService, CompleterItem } from 'ng2-completer';
import { RealizarPedido } from '../_modelo/contenedor/realizarPedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  dataSourceCliente: CompleterData;
  dataSourcePlato: CompleterData;
  // --------
  cliente: Cliente;
  plato: Plato;
  cantidad: number;
  // --------
  detalle: Detalle[] = [];
  // --------
  alertaFormulario: boolean = false;
  index: number = 0;
  total: number = 0;
  // --------
  alertaRegistro: boolean = false;

  constructor(private servicioCliente: ClienteService,
    private servicioPlato: PlatoService, 
    private servicioPedido: PedidoService,
    private completerService: CompleterService) {

    this.servicioCliente.getClientes().subscribe(data => {
      this.dataSourceCliente = this.completerService.local(data, 'nombreCompleto,identificacion', 'nombreCompleto');
    });

    this.servicioPlato.getPlatos().subscribe(data => {
      this.dataSourcePlato = this.completerService.local(data, 'nombre', 'nombre');
    });
  }

  ngOnInit() {
  }

  seleccionarCliente(selected: CompleterItem) {
    if (selected) {
      this.cliente = selected.originalObject;
    }
  }

  seleccionarPlato(selected: CompleterItem) {
    if (selected) {
      this.plato = selected.originalObject;
    }
  }

  agregarPlato() {

    this.alertaRegistro = false;
    
    if (!this.cliente || !this.plato || this.cantidad == null) {
      this.alertaFormulario = true;
      return;
    }

    this.alertaFormulario = false;

    let detalle = new Detalle();
    detalle.plato = this.plato;
    detalle.cantidad = this.cantidad;
    detalle.index = this.index;

    this.detalle.push(detalle);

    this.total += detalle.plato.precio * detalle.cantidad;
    this.index++;
  }

  remover(index: number) {

    this.total -= this.detalle[index].plato.precio * this.detalle[index].cantidad;
    this.detalle.splice(index, 1);

    for (let i = 0; i < this.detalle.length; i++) {
      this.detalle[i].index = i;
    }

    this.index--;
  }

  respuestaEnviarPedido(evento: boolean) {
    if (evento) {
      this.enviarPedido();
    }
  }


  enviarPedido() {
    
    let pedido = new Pedido();
    pedido.cliente = this.cliente;
    pedido.total = this.total;

    let realizarPedido = new RealizarPedido();
    realizarPedido.pedido = pedido;
    realizarPedido.detalle = this.detalle; 
    
    this.servicioPedido.realizarPedido(realizarPedido).subscribe(data =>{
      if(data){
        this.alertaRegistro = true;
        this.limpiar();
      }
    });
  }


  limpiar() {
    this.detalle = [];
    this.index = 0;
    this.total = 0;
  }
}
