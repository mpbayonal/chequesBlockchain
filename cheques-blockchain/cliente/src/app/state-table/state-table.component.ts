
import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'state-tabla',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class StateTableComponent {

  @Input() estados: any;

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

      estado: {
        title: 'Estado',
      },

    },
  };
}
