import { LoginService } from './../_service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: string;

  constructor(public servicioLogin: LoginService) { }

  ngOnInit() {

    this.usuario = this.servicioLogin.getUsuario();
  }

}
