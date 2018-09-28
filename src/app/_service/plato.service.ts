import { URL_API } from './util/_var.constant';
import { Plato } from './../_modelo/plato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlatoService {

  platosCambio = new Subject<Plato[]>();

  private url: string = URL_API + "/plato";


  constructor(private http: HttpClient) { }


  getPlatos() {

    return this.http.get<Plato[]>(this.url + "/listarTodos")
  }

  getPlatoPorId(id: number) {

    return this.http.get<Plato>(this.url + "/listarPorId?id=" + id);
  }

  registrarPlato(plato: Plato) {

    this.http.post(this.url + "/registrar", plato).subscribe(data => {
      if (data) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }

  actualizarPlato(plato: Plato) {

    this.http.put(this.url + "/actualizar", plato).subscribe(data => {
      if (data) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }


  eliminarPlato(id: number) {

    this.http.delete(this.url + "/eliminar?id=" + id).subscribe(data => {
      if (data) {
        this.getPlatos().subscribe(platos => {
          this.platosCambio.next(platos);
        });
      }
    });
  }

}
