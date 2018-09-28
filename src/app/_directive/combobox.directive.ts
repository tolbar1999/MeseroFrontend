import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCombobox]'
})
export class ComboboxDirective {

  @HostBinding("class.show") estado: boolean = false;

  constructor() { }
 
  @HostListener("click") abrir(){

    this.estado = !this.estado;
  }

}
