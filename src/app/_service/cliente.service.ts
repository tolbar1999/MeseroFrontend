import { URL_API } from './util/_var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../_modelo/cliente';

@Injectable()
export class ClienteService {

  private url : string = URL_API+"/cliente";

  constructor(private http: HttpClient) { }
  
  getClientes(){
      return this.http.get<Cliente[]>(this.url+"/listarTodos");
  }

  registrar(nombre: string){
    let cliente: Cliente = new Cliente();
    cliente.nombreCompleto = nombre;
    cliente.identificacion = "99999";

    return this.http.post<Cliente>(this.url+"/registrar",cliente);
  }


}
