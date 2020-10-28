
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'state-tabla',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class StateTableComponent {

  data = [
    {
      id: "2020/08/09",
      name: 'Patricia Lebsack',
      tipo:'Pagado',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
    },
    {
      id: "2020/08/09",
      name: 'Patricia Lebsack',
      tipo:'Presentado para Canje',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
    },
    {
      id: "2020/07/05",
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'Endoso',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: "2020/06/15",
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'Endoso',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: "2020/06/09",
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'Endoso',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: "2019/06/01",
      valor: 2333300,
      name: 'Mrs. Dennis Schulist',
      tipo:'Activo',
      email: 'Karley_Dach@jasper.info',
      passed: 'Si',
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

      tipo: {
        title: 'Estado',
      },

    },
  };
}
