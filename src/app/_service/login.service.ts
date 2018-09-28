import { HOST, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD, TOKEN_NAME } from './util/_var.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './util/token';
import * as decode from 'jwt-decode';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {

  private url: string = `${HOST}/oauth/token`;

  constructor(private http: HttpClient, private token: Token) { }


  login(usuario: string, clave: string) {

    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(clave)}`;

    return this.http.post(this.url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
    });
  }

  cerrarSesion() {
    sessionStorage.removeItem(TOKEN_NAME);
  }

  estaLogeado() {
    let respuesta = false;
    let access_token = this.token.getAccessToken();

    if (access_token != null) {
      respuesta = tokenNotExpired(TOKEN_NAME, access_token);
    }

    return respuesta;
  }

  getUsuario() {
    let usuario = decode(this.token.getAccessToken()).user_name;
    return usuario;
  }

}
