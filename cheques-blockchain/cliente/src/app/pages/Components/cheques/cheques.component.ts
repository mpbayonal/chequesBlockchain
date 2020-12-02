import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {submit, makePrivateKey, setPrivateKey, getPrivateKey, clearPrivateKey} from '../../../services/transactions';
import {get, getPublicKey, hashPassword, post, setAuth, clearAuth} from '../../../services/api';
import * as parsing from '../../../services/parsing';


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

    this.router.navigate(['/cheque', this.rowData.id]);
    this.save.emit(this.rowData);
  }

}

@Component({
  selector: 'app-cheques',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `

})
export class ChequesComponent {

  source: LocalDataSource;


  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false


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

              {value: 'General', title: 'General'},
              {value: 'Abono en cuenta', title: 'Abono en cuenta'},
              {value: 'No negociable', title: 'No negociable'},
              {value: 'Fiscal', title: 'Fiscal'},
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
            true: true,
            false: false,
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


  constructor() {
    this.source = new LocalDataSource();
    let usersdict = {}

    get('agents')
      .then(agents => {


        for (let i in agents) {
          usersdict[agents[i].key] = agents[i]
        }

        let recordsList = []
        get('records?recordType=cheque').then((records) => {


          for (let i in records) {

            let newRecord = records[i]


            const publicKey = getPublicKey()

            let n = 0
            let encontro = false
            for (let i in newRecord.updates.custodians) {


              if (n !== 0) {

                if (newRecord.updates.custodians[i].agentId === publicKey) {

                  encontro = true


                } else if (encontro === true) {
                  encontro = false
                  let librador = usersdict[newRecord.updates.custodians[n - 1].agentId].name
                  let tipo = null
                  let estado = null
                  let valor = null
                  for (let j in newRecord.properties) {

                    let propertie = newRecord.properties[j]
                    if (propertie.name === "tipo") {

                      tipo = propertie.value
                    }
                    if (propertie.name === "estado") {
                      estado = propertie.value

                    }
                    if (propertie.name === "valor") {
                      valor = propertie.value

                    }

                  }


                  let temp = {
                    id: newRecord.recordId,
                    valor: valor,
                    name: librador,
                    tipo: tipo,
                    passed: newRecord.final,
                    button: 'Ver',
                  }
                  recordsList.push(temp)

                }

              } else {


                if (newRecord.updates.custodians[i].agentId === publicKey) {


                  let librador = usersdict[newRecord.owner].name
                  let tipo = null
                  let estado = null
                  let valor = null
                  for (let j in newRecord.properties) {

                    let propertie = newRecord.properties[j]
                    if (propertie.name === "tipo") {

                      tipo = propertie.value
                    }
                    if (propertie.name === "estado") {
                      estado = propertie.value

                    }
                    if (propertie.name === "valor") {
                      valor = propertie.value

                    }

                  }


                  let temp = {
                    id: newRecord.recordId,
                    valor: valor,
                    name: librador,
                    tipo: tipo,
                    passed: newRecord.final,
                    button: 'Ver',
                  }
                  recordsList.push(temp)


                }


              }
              n = n + 1

            }

            if (encontro) {


              let librador = usersdict[newRecord.owner].name
              let tipo = null
              let estado = null
              let valor = null
              for (let j in newRecord.properties) {

                let propertie = newRecord.properties[j]
                if (propertie.name === "tipo") {

                  tipo = propertie.value
                }
                if (propertie.name === "estado") {
                  estado = propertie.value

                }
                if (propertie.name === "valor") {
                  valor = propertie.value

                }

              }


              let temp = {
                id: newRecord.recordId,
                valor: valor,
                name: librador,
                tipo: tipo,
                passed: newRecord.final,
                button: 'Ver',
              }
              recordsList.push(temp)
            }


          }


          this.source.load(recordsList);

        })


      })


  }


}
