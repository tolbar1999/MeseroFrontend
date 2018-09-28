import { URL_API } from './util/_var.constant';
import { Pedido } from './../_modelo/pedido';
import { RealizarPedido } from './../_modelo/contenedor/realizarPedido';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PedidoService {

  private url : string = URL_API+"/pedido";

  constructor(private http: HttpClient) { }

  realizarPedido(realizarPedido: RealizarPedido){
    return this.http.post(this.url+"/realizarPedido",realizarPedido);
  }

  listarPorFechaUnica(fecha: Date){
    return this.http.get<Pedido[]>(this.url+"/listarPorFechaUnica?fecha="+fecha);
  }

  listarPorFechaRango(fecha: Date[]){
    return this.http.get<Pedido[]>(this.url+"/listarPorFechaRango?fecha="+fecha);
  }


}
