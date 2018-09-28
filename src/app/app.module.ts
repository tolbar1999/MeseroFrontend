import { AuthInterceptor } from './_service/util/auth-interceptor';
import { GuardService } from './_service/util/guard.service';
import { LoginService } from './_service/login.service';
import { PedidoService } from './_service/pedido.service';
import { ClienteService } from './_service/cliente.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PlatoComponent } from './plato/plato.component';
import { ComboboxDirective } from './_directive/combobox.directive';
import { PedidoComponent } from './pedido/pedido.component';
import { AppRoutingModule } from './app-routing.module';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
import { PlatoService } from './_service/plato.service';
import { PlatoFiltroPipe } from './_pipe/plato-filtro.pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmarModalComponent } from './componentes/modal/confirmar-modal/confirmar-modal.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { TabsModule } from 'ngx-bootstrap';
import { DatePickerComponent } from './componentes/picker/date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SimpleModalComponent } from './componentes/modal/simple-modal/simple-modal.component';
import { LoginComponent } from './login/login.component';
import { Token } from './_service/util/token';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConsultaComponent,
    PlatoComponent,
    ComboboxDirective,
    PedidoComponent,
    PlatoListaComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent,
    PlatoFiltroPipe,
    ConfirmarModalComponent,
    DatePickerComponent,
    SimpleModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2CompleterModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    PlatoService,
    ClienteService,
    PedidoService,
    LoginService,
    GuardService,
    Token,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
