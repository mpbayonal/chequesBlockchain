import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ButtonViewComponent} from "../cheques/cheques.component";
import { LocalDataSource } from 'ng2-smart-table';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {submit,makePrivateKey,setPrivateKey, getPrivateKey,clearPrivateKey} from '../../../services/transactions';
import {get,getPublicKey,hashPassword,post,setAuth,clearAuth} from '../../../services/api';
import * as parsing from '../../../services/parsing';

@Component({
  selector: 'app-cheques-detalle',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
})
export class ChequesDetalleComponent {

  source: LocalDataSource;

  data = [
    {
      id: 46489586,
      valor: 233300,
      name: 'Patricia Lebsack',
      tipo:'General',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
      button: 'Ver',
    },
    {
      id: 535678,
      valor: 230900,
      name: 'Chelsey Dietrich',
      tipo:'General',
      email: 'Lucio_Hettinger@annie.ca',
      passed: 'No',
      button: 'Ver',
    },
    {
      id: 6345678,
      valor: 2333300,
      name: 'Mrs. Dennis Schulist',
      tipo:'General',
      email: 'Karley_Dach@jasper.info',
      passed: 'Si',
      button: 'Ver',
    },
    {
      id: 723568,
      valor: 233300,
      name: 'Kurtis Weissnat',
      tipo:'Fiscal',
      email: 'Telly.Hoeger@billy.biz',
      passed: 'No',
      button: 'Ver',
    },
    {
      id: 834678,
      valor: 222300,
      name: 'Nicholas Runolfsdottir V',
      tipo:'General',
      email: 'Sherwood@rosamond.me',
      passed: 'Si',
      button: 'Ver',
    },
    {
      id: 9234688,
      valor: 22300,
      name: 'Glenna Reichert',
      tipo:'No negociable',
      email: 'Chaim_McDermott@dana.io',
      passed: 'No',
      button: 'Ver',
    },
    {
      id: 102346,
      valor: 2300,
      name: 'Clementina DuBuque',
      tipo:'General',
      email: 'Rey.Padberg@karina.biz',
      passed: 'No',
      button: 'Ver',
    },
    {
      id: 56878786,
      valor: 2000000,
      name: 'Laura Martinez Castro',
      tipo:'General',
      email: 'Julianne.OConner@kory.org',
      passed: 'Si',
      button: 'Ver',
    },
    {
      id: 1133456,
      valor: 24300,
      name: 'Nicholas DuBuque',
      tipo:'Abono en cuenta',
      email: 'Rey.Padberg@rosamond.biz',
      passed: 'Si',
      button: 'Ver',
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
        title: 'Beneficiario',
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

  constructor() {
    this.source = new LocalDataSource();

    get('agents')
      .then(agents => {
        const publicKey = getPublicKey()
        let agents2 = agents.filter(agent => agent.key !== publicKey)

        console.log(agents2)

      })

    get('records?recordType=cheque').then((records) => {
      console.log(records)
      this.source.load(records);
    })



  }


}
