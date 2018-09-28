import { Component, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-confirmar-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.css']
})
export class ConfirmarModalComponent {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() claseBoton: string;
  @Output() estaConfirmado: EventEmitter<boolean> = new EventEmitter<boolean>();
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  

  confirmar(){
    this.estaConfirmado.emit(true);
    this.modalRef.hide();
  }

  cancelar(){
    this.modalRef.hide();
  }
}
