import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'button-view',
  template: `
    <button class="btn btn-sm btn-outline-default btn-round" (click)="onClick()">Ver</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router
  ) {
  }


  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    console.log(this.rowData)
    this.router.navigate(['/cheque', this.rowData.id]);
    this.save.emit(this.rowData);
  }

}

@Component({
  selector: 'app-cheques',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `

})
export class ChequesComponent  {



  data = [
    {
      id: 46489586,
      valor: 233300,
      name: 'Patricia Lebsack',
      tipo:'General',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
    },
    {
      id: 535678,
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'General',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
    },
    {
      id: 6345678,
      valor: 2333300,
      name: 'Mrs. Dennis Schulist',
      tipo:'General',
      email: 'Karley_Dach@jasper.info',
      passed: 'Si',
    },
    {
      id: 723568,
      valor: 233300,
      name: 'Kurtis Weissnat',
      tipo:'Fiscal',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
    },
    {
      id: 834678,
      valor: 222300,
      name: 'Nicholas Runolfsdottir V',
      tipo:'General',
      email: 'Sherwood@rosamond.me',
      passed: 'Si',
    },
    {
      id: 9234688,
      valor: 22300,
      name: 'Glenna Reichert',
      tipo:'No negociable',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
    },
    {
      id: 102346,
      valor: 2300,
      name: 'Clementina DuBuque',
      tipo:'General',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
    },
    {
      id: 1133456,
      valor: 24300,
      name: 'Nicholas DuBuque',
      tipo:'Abono en cuenta',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Si',
    },
  ];

  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false


    },
    columns: {
      id: {
        title: 'Numero de Cheque',
      },
      tipo: {
        title: 'Tipo de Cheque',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [

              { value: 'General', title: 'General' },
              { value: 'Abono en cuenta', title: 'Abono en cuenta' },
              { value: 'No negociable', title: 'No negociable' },
              { value: 'Fiscal', title: 'Fiscal' },
            ],
          },
        },
      },

      valor: {
        title: 'Valor',
      },
      name: {
        title: 'Librador',
      },


      passed: {
        title: 'Ya fue cobrado',
        filter: {
          type: 'checkbox',
          config: {
            true: 'Si',
            false: 'No',
            resetText: 'clear',
          },
        },
      },

      button: {
        title: '',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {

          });
        }
      },
    },
  };



}
