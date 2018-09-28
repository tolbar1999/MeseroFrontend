import { PlatoService } from './../../_service/plato.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Plato } from '../../_modelo/plato';

@Component({
  selector: 'app-plato-edicion',
  templateUrl: './plato-edicion.component.html',
  styleUrls: ['./plato-edicion.component.css']
})
export class PlatoEdicionComponent implements OnInit {

  id: number;
  edicion: boolean = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private servicioPlato: PlatoService) {
    this.form = new FormGroup({
      "id": new FormControl(0),
      "nombre": new FormControl(""),
      "urlImagen": new FormControl(""),
      "precio": new FormControl(0)
    });
  }

  ngOnInit() {
    
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.edicion = this.id != null;
      this.iniciarFormulario();
    });
  }

  private iniciarFormulario() {
    if (this.edicion) {
      this.servicioPlato.getPlatoPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          "id": new FormControl(data.id),
          "nombre": new FormControl(data.nombre),
          "urlImagen": new FormControl(data.urlImagen),
          "precio": new FormControl(data.precio)
        });
      });
    }
  }

  operar() {
    let nuevoPlato = new Plato(this.form.value["id"], this.form.value["nombre"], this.form.value["urlImagen"], this.form.value["precio"]);
    
    if (this.edicion) {
      this.servicioPlato.actualizarPlato(nuevoPlato);
    } else {
      this.servicioPlato.registrarPlato(nuevoPlato);
    }
  }


}
