import {Component, Input, OnInit} from '@angular/core';
import {ButtonViewComponent} from "../cheques/cheques.component";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-detalle-cheque-tabla',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class DetalleChequeTablaComponent {

  @Input() endosos: any;

  @Input() data

  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false


    },
    columns: {
      id: {
        title: 'Fecha',
      },

      valor: {
        title: 'Public Key',
      },
      name: {
        title: 'Nombre',
      },

    },
  };

  constructor() {

    this.data = this.endosos


  }


}
