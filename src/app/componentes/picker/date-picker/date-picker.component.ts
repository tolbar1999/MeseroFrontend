import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  fechaUnica = new Date();
  fechaRango : Date[] = [new Date(),new Date()];
  @Output() emisionFechaUnica: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() emisionFechaRango: EventEmitter<Date[]> = new EventEmitter<Date[]>();
  // -----------
  @Input() opcion: string;
  

  constructor(private localServicio: BsLocaleService) {
  }

  ngOnInit(){ 
    defineLocale('es', esLocale);
    this.localServicio.use("es");
  }

  buscar(){

    if(this.opcion == "U"){
      this.emisionFechaUnica.emit(this.fechaUnica);
    }
    if(this.opcion == "M"){
      this.emisionFechaRango.emit(this.fechaRango);
    }
  }

}
