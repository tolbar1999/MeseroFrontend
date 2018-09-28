import { GuardService } from './_service/util/guard.service';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "../../node_modules/@angular/core";

import { ConsultaComponent } from './consulta/consulta.component';
import { PlatoComponent } from './plato/plato.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    {
        path: "plato", component: PlatoComponent, children: [
            { path: "", component: PlatoInicioComponent },
            { path: "nuevo", component: PlatoEdicionComponent },
            { path: ":id", component: PlatoDetalleComponent },
            { path: ":id/editar", component: PlatoEdicionComponent }
        ], canActivate: [GuardService]
    },
    { path: "pedido", component: PedidoComponent, canActivate: [GuardService] },
    { path: "consulta", component: ConsultaComponent, canActivate: [GuardService] },
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {



}