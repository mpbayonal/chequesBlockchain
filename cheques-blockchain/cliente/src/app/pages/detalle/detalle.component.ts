import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {obj} from '../../services/payloads';

import {OnDestroy} from '@angular/core';

import * as _ from 'lodash';
import {submit, makePrivateKey, setPrivateKey, getPrivateKey, clearPrivateKey} from '../../services/transactions';
import {get, getPublicKey, hashPassword, post, setAuth, clearAuth} from '../../services/api';
import * as parsing from '../../services/parsing';

@Component({
  selector: 'app-detalle',
  moduleId: module.id,
  templateUrl: './detalle.component.html',
})

export class DetalleComponent implements OnInit {

  /** Formulario de control para el login de usuarios */
  public frmCheque: FormGroup;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public submited = false;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public creado = false;
  /** Opciones de cargo en tipo de usuario Ferretero */
  public optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];

  public value;
  public beneficiario;
  public libradora;
  public id;
  public fecha;
  public tipo;
  public estado;
  public primerPropietario;
  public sePuedeEndosar;
  public optPortador = [];
  public optPortador2 = [];
  @Input() signingKey: any;
  @Input() state: any;
  @Input() idCheque:any;
  @Input() chequesDisponibles:any;
  @Input() fondosDisponibles:any;
  endososLista = []
  estadosLista = []
  crear = false;

  constructor(public router: Router, public route: ActivatedRoute,
    public fb: FormBuilder,
  ) {
    this.frmCheque = this.fb.group({
      portador: ['', [Validators.required]]
    });

  }


  ngOnInit(){
// import ActivatedRoute
    let id =  this.route.snapshot.paramMap.get('id') ;
    this.id = id
    console.log(id)
    this.chequesDisponibles = 23
    this.fondosDisponibles = 2000000

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


    let usersdict = {}

    get('agents')
      .then(agents => {


        for(let i in agents){
          usersdict[agents[i].key] = agents[i]
        }

        get(`records/${id}`)
          .then(newRecord => {


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

            let t = getPublicKey()
            console.log(t)
            console.log(newRecord.custodian)
            this.tipo = tipo
            this.estado = estado
            this.value = valor

            this.primerPropietario = usersdict[newRecord.owner].name
            if(newRecord.custodian.toString() === t.toString() && tipo != 'No negociable'){
              this.sePuedeEndosar = true

            }
            let endoso = []


            for(let y in newRecord.updates.custodians){


              let dateTemp = new Date(newRecord.updates.custodians[y].timestamp*1000).toDateString()
              let temp = {
                id: dateTemp,
                valor: newRecord.updates.custodians[y].agentId,
                name: usersdict[newRecord.updates.custodians[y].agentId].name,
              }
              endoso.push(temp)
              this.libradora = usersdict[t.toString()].name

            }
            this.endososLista = endoso
            console.log(this.endososLista)
            let estadoList = []
            for(let y in newRecord.updates.properties.estado) {

              let dateTemp = new Date(newRecord.updates.properties.estado[y].timestamp*1000).toDateString()
              let temp = {
                id: dateTemp,
                estado: newRecord.updates.properties.estado[y].value

              }
              estadoList.push(temp)

            }
            this.estadosLista = estadoList


          })




      })











  }
  /**
   * Funcion que valida y envia al registro la informacion del formulario
   */
  async onEndosarCheque() {
    this.submited = true;
    if (this.frmCheque.invalid) {
      return false;
    }

    let cheque = this.frmCheque.value;
    let fechaActual = new Date().toString()

    console.log(fechaActual)


    let tempFecha = new Date()
    this.fecha = tempFecha.toDateString()

    let key = null
    let number = 0;
    for(let agent in this.optPortador2){
      console.log(this.optPortador2[agent])
      if(cheque.portador === this.optPortador2[agent].name){

        key = this.optPortador2[agent].key
      }
      number = number + 1;
    }

    const reporterPayloads2 = await obj.createProposal({
      recordId: this.id,
      receivingAgent: key,
      role: obj.createProposal.enum.CUSTODIAN,
      properties: []
    })


    const payload = obj.updateProperties({
      recordId: this.id,
      properties: [{
        name: "estado",
        dataType: 4,
        stringValue: "ENDOSO"
      }]
    })


    submit(reporterPayloads2, true, "false")
      .then(() => {

        submit(payload, true)
          .then(() => get(`records/${this.id}`))
          .then(property => {
            console.log(property)
          })

        this.beneficiario = cheque.portador
        this.creado = true
      })


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
