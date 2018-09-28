import { PlatoService } from './../../_service/plato.service';
import { Component, OnInit } from '@angular/core';
import { Plato } from '../../_modelo/plato';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {

  platos : Plato[];
  filtrarConsulta = "";

  constructor(private platoService: PlatoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.platoService.platosCambio.subscribe(data => {
      this.platos = data;
    });

    this.platoService.getPlatos().subscribe(data => {
        this.platos = data;        
      }
    )
  }

  crearNuevoPlato(){
    this.router.navigate(["nuevo"], { relativeTo : this.route });
  }

}
