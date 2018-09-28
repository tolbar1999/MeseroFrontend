import { PlatoService } from './../../_service/plato.service';
import { Component, OnInit } from '@angular/core';
import { Plato } from '../../_modelo/plato';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  plato: Plato;
  id: number;

  constructor(private platoService: PlatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.platoService.getPlatoPorId(this.id).subscribe(data => {
            this.plato = data;
          }
        )
      }
    )
  }


  editarPlato() {
    this.router.navigate(["editar"], { relativeTo: this.route });
  }

  respuestaEliminar(evento : boolean){
    if(evento){
      this.platoService.eliminarPlato(this.id);
      this.router.navigate(["plato"]);
    }
  }

}
