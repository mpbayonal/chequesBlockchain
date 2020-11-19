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
    let usersdict = {}

    get('agents')
      .then(agents => {


        for(let i in agents){
          usersdict[agents[i].key] = agents[i]
        }

        let recordsList = []
        get('records?recordType=cheque').then((records) => {

          for(let i in records){

            let newRecord = records[i]



            const publicKey = getPublicKey()
            if(newRecord.owner === publicKey ){
              let tipo = null
              let estado = null
              let valor = null
              for(let j in newRecord.properties){

                let propertie = newRecord.properties[j]
                if(propertie.name === "tipo"){

                  tipo = propertie.value
                }
                if(propertie.name === "estado"){
                  estado = propertie.value

                }
                if(propertie.name === "valor"){
                  valor = propertie.value

                }

              }


              console.log(newRecord.updates.custodians[1])
              let temp = {
                id: newRecord.recordId,
                valor: valor,
                name: usersdict[newRecord.updates.custodians[1].agentId].name,
                tipo: tipo,
                button: 'Ver',
              }
              recordsList.push(temp)


            }

          }

          console.log(recordsList)
          this.source.load(recordsList);

        })



      })




  }


}
