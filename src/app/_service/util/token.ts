import { HttpHeaders } from '@angular/common/http';
import { TOKEN_NAME } from './_var.constant';
import { Injectable } from '@angular/core';

@Injectable()
export class Token {

    getAccessToken() {
        let respuesta = null;
        try {
            respuesta = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
        } catch{ }

        return respuesta;
    }

    getHeaderToken() {
        let access_token = this.getAccessToken();

        return new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json');
    }
}