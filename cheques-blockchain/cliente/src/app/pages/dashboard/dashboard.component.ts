import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {obj}  from '../../services/payloads';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {submit} from '../../services/transactions';
import {get,getPublicKey} from '../../services/api';
import * as parsing from '../../services/parsing';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  /** Formulario de control para el login de usuarios */
  public frmCheque: FormGroup;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public submited = false;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public creado = false;
  /** Opciones de cargo en tipo de usuario Ferretero */
  public optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];

  @Input() signingKey: any;
  @Input() state: any;
  @Input() idCheque:any;
  @Input() chequesDisponibles:any;
  @Input() fondosDisponibles:any;
  crear = false;

  constructor(
    public fb: FormBuilder,
  ) {
    this.frmCheque = this.fb.group({
      portador: ['', [Validators.required]],
      suma: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });

  }

  ngOnInit(){

    let ruta2 = "http://localhost:8020/records?recordType=cheque"
    get(ruta2).then((record) => {


      console.log(record)

    })

    this.chequesDisponibles = 23
    this.fondosDisponibles = 2000000
    get('records?recordType=asset').then((records) => {
     console.log(records)
      })

    get('agents')
      .then(agents => {
        const publicKey = getPublicKey()
        this.state.agents = agents.filter(agent => agent.key !== publicKey)
      })

  }
  /**
   * Funcion que valida y envia al registro la informacion del formulario
   */
  onCrearCheque() {
    this.submited = true;
    if (this.frmCheque.invalid) {
      return false;
    }
    this.creado = true
    let cheque = this.frmCheque.value;
    console.log(cheque)
    const properties = [{
      name: 'type',
      stringValue: this.state.type,
      dataType: obj.createRecord.enum.STRING
    }]

    if (this.state.subtype) {
      properties.push({
        name: 'subtype',
        stringValue: this.state.subtype,
        dataType: obj.createRecord.enum.STRING
      })
    }

    const recordPayload = obj.createRecord({
      recordId: this.state.serialNumber,
      recordType: 'asset',
      properties
    })

    const reporterPayloads = this.state.reporters
      .filter((reporter) => !!reporter.reporterKey)
      .map((reporter) => obj.createProposal({
        recordId: this.state.serialNumber,
        receivingAgent: reporter.reporterKey,
        role: obj.createProposal.enum.REPORTER,
        properties: reporter.properties
      }))

    submit([recordPayload].concat(reporterPayloads), true)
      .then()
  }

  /**
   * Funcion para abreviar la obtencion de valores de campos del formulario
   */
  get f() {
    return this.frmCheque.controls;
  }

  regresar() {
   this.creado = false;
   this.crear = false;
  }
}
