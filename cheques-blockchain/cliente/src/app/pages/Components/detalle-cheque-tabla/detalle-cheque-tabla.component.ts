import { Component, OnInit } from '@angular/core';
import {ButtonViewComponent} from "../cheques/cheques.component";

@Component({
  selector: 'app-detalle-cheque-tabla',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class DetalleChequeTablaComponent {

  data = [
    {
      id: "2020/07/05",
      valor: 233300,
      name: 'Patricia Lebsack',
      tipo:'General',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
    },
    {
      id: "2019/06/15",
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'General',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: "2019/06/09",
      valor: 2333300,
      name: 'Mrs. Dennis Schulist',
      tipo:'General',
      email: 'Karley_Dach@jasper.info',
      passed: 'Si',
    },
    {
      id: "2019/06/01",
      valor: 233300,
      name: 'Kurtis Weissnat',
      tipo:'Fiscal',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    }
  ];

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
        title: 'Cedula',
      },
      name: {
        title: 'Nombre',
      },

    },
  };
}
