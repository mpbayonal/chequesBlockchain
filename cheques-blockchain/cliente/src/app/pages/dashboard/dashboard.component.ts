import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {obj} from '../../services/payloads';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {OnDestroy} from '@angular/core';

import {Router} from '@angular/router';
import * as _ from 'lodash';
import {submit, makePrivateKey, setPrivateKey, getPrivateKey, clearPrivateKey} from '../../services/transactions';
import {get, getPublicKey, hashPassword, post, setAuth, clearAuth} from '../../services/api';
import * as parsing from '../../services/parsing';

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  /** Formulario de control para el login de usuarios */
  public frmCheque: FormGroup;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public submited = false;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public creado = false;
  /** Opciones de cargo en tipo de usuario Ferretero */
  public optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];
  public optPortador2 = [];
  public optPortador = [];
  public fecha;
  public beneficiario;

  @Input() signingKey: any;
  @Input() state: any;
  @Input() idCheque: any;
  @Input() chequesDisponibles: any;
  @Input() fondosDisponibles: any;
  crear = false;
  idChequeUnique = ""
  portadorNombre = ""
  agentesLista = []
  private x: any;
  private libradora;

  constructor(
    public fb: FormBuilder,
  ) {
    this.idChequeUnique = this.generateId(20)
    this.frmCheque = this.fb.group({
      portador: ['', [Validators.required]],
      suma: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });

  }

  ngOnInit() {
    let t = getPublicKey()
    console.log(t)
    let user = null

    get('agents')
      .then(agents => {
        const publicKey = getPublicKey()
        var agent = null
        for (agent of agents) {
          if (agent.key !== publicKey) {
            this.optPortador2.push(agent)
            this.optPortador.push(agent.name)
          }

        }

      })


    get(`agents/${t}`)
      .then(agent => {
        user = agent
        console.log(user)
      })


    let ruta2 = "http://localhost:8020/records?recordType=cheque"
    get(ruta2).then((record) => {


      console.log(record)

    })

    this.chequesDisponibles = 23
    this.fondosDisponibles = 2000000



  }

  /**
   * Funcion que valida y envia al registro la informacion del formulario
   */
  async onCrearCheque() {
    this.submited = true;
    if (this.frmCheque.invalid) {
      return false;
    }

    let cheque = this.frmCheque.value;
    let fechaActual = new Date().toString()

    console.log(fechaActual)


    const newrecord = await obj.createRecord({
      recordId: this.idChequeUnique,
      recordType: 'cheque',
      properties: [
        {
          name: 'estado',
          stringValue: "ACTIVO",
          dataType: obj.createRecord.enum.STRING
        },
        {
          name: 'tipo',
          stringValue: cheque.tipo,
          dataType: obj.createRecord.enum.STRING
        },
        {
          name: 'valor',
          numberValue: cheque.valor,
          dataType: obj.createRecord.enum.NUMBER
        },
      ]
    })
    console.log(newrecord)
    let key = null
    let number = 0;
    for(let agent in this.optPortador2){
      console.log(this.optPortador2[agent])
      if(cheque.portador === this.optPortador2[agent].name){
        key = this.optPortador2[agent].key
      }
      number = number + 1;
    }


    console.log(key)

    const reporterPayloads2 = await obj.createProposal({
      recordId: this.idChequeUnique,
      receivingAgent: key,
      role: obj.createProposal.enum.CUSTODIAN,
      properties: []
    })





    submit([newrecord].concat(reporterPayloads2), true, "false")
      .then(() => {
        let tempFecha = new Date()
        this.fecha = tempFecha.toDateString()
        this.beneficiario = cheque.portador

        let t = getPublicKey()
        let agent3 = null
        for (agent3 of this.agentesLista) {
          if (agent3.key === cheque.portador) {
            this.portadorNombre = agent3.name
          }
          if(agent3.key === t.toString()){
            this.libradora =  agent3.name
          }

        }
        this.creado = true
      })


  }

  dec2hex(dec) {
    return dec < 10
      ? '0' + String(dec)
      : dec.toString(16)
  }

// generateId :: Integer -> String
  generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, this.dec2hex).join('')
  }

  /**
   * Funcion para abreviar la obtencion de valores de campos del formulario
   */
  get f() {
    return this.frmCheque.controls;
  }

  regresar() {
    this.idChequeUnique = this.generateId(20);
    this.creado = false;
    this.crear = false;
  }
}
