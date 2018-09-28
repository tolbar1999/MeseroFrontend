import { LoginService } from './../login.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Token } from './token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private servicioLogin: LoginService, private token: Token) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.servicioLogin.estaLogeado()) {
      request = request.clone({
        headers: this.token.getHeaderToken()
      });
    }

    return next.handle(request);
  }
}