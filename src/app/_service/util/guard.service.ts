import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private servicioLogin: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let respuesta = this.servicioLogin.estaLogeado();

    if (!respuesta) {
      this.router.navigate(['login']);
    }

    return respuesta;
  }
}
