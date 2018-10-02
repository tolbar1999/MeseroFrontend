import { TOKEN_NAME } from './../_service/util/_var.constant';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;
  mensaje: boolean = false;
  mostrar: boolean = true;
  mensajeErrorRestablecer: boolean = false;
  mensajeExitoRestablecer: boolean = false;
  usuarioRestablecer: string = "";

  constructor(private servicioLogin: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.servicioLogin.estaLogeado()) {
      this.router.navigate(['plato']);
    }
  }

  iniciarSesion() {
    this.servicioLogin.login(this.usuario, this.clave).subscribe(data => {

      sessionStorage.setItem(TOKEN_NAME, JSON.stringify(data));
      this.router.navigate(['plato']);

    }, error => {
      this.mensaje = true;
    })
  }


  confirmar(){
    this.servicioLogin.existeUsuario(this.usuarioRestablecer).subscribe(data =>{
      if(data){
        this.mensajeErrorRestablecer = false;
        this.servicioLogin.restablecerClave(this.usuarioRestablecer).subscribe(data =>{
          this.mensajeExitoRestablecer = true;
        });
      }else{
        this.mensajeErrorRestablecer = true;
      }
    });
  }

  cambiarMostrar() {
    this.mostrar = !this.mostrar;
  }

}
