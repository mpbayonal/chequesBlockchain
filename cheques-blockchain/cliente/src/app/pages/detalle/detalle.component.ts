import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ViewChild, ElementRef } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
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
  @ViewChild('htmlData') htmlData:ElementRef;


  /** Formulario de control para el login de usuarios */
  public frmCheque: FormGroup;
  public frmEstado: FormGroup;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public submited = false;
  public submited2 = false;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public creado = false;
  public creado2 = false;
  /** Opciones de cargo en tipo de usuario Ferretero */
  public optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];

  public value;
  public beneficiario;
  public libradora;
  public id;
  public fecha;
  public fechaCreacion;
  public tipo;
  public estado;
  public primerPropietario;
  public sePuedeEndosar;
  public seCambiarEstado;
  public estadoLista = [];
  public optPortador = [];
  public optPortador2 = [];
  pdfMake: any;
  @Input() signingKey: any;
  @Input() state: any;
  @Input() idCheque:any;
  @Input() chequesDisponibles:any;
  @Input() fondosDisponibles:any;
  endososLista = []
  estadosLista = []
  crear = false;
  token;
  num;
  contrato = true;
  beneficiario2;
  cambiar = false;

  constructor(public router: Router, public route: ActivatedRoute,
    public fb: FormBuilder,
  ) {
    this.frmCheque = this.fb.group({
      portador: ['', [Validators.required]]
    });
    this.frmEstado = this.fb.group({
      estado: ['', [Validators.required]]
    });

  }


  ngOnInit(){
// import ActivatedRoute
    let id =  this.route.snapshot.paramMap.get('id') ;
    this.id = id

    this.chequesDisponibles = 23
    this.fondosDisponibles = 2000000

    let t = getPublicKey()

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
    let url2 = "blocks/" + id
    get(url2)
      .then(record => {
        this.num = record[0].startBlockNum
        this.token = record[0].endBlockNum


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

            this.tipo = tipo
            this.estado = estado
            this.value = valor



            this.primerPropietario = usersdict[newRecord.owner].name
            if(newRecord.custodian.toString() === t.toString() && tipo != 'No negociable' ){

              if(this.estado === "ACTIVO" || this.estado === "ENDOSO"){
                this.seCambiarEstado = true
                this.sePuedeEndosar = true
                this.estadoLista.push('PRESENTADO PARA CANJE')
                this.estadoLista.push('PRESENTADO PARA COBRO')
                this.estadoLista.push('PROTESTADO')

              }
              else if(this.estado === 'PRESENTADO PARA CANJE' || this.estado === 'PRESENTADO PARA COBRO'){
                this.seCambiarEstado = true
                this.estadoLista.push('PAGADO')
                this.estadoLista.push('PROTESTADO')


              }
              else if(this.estado === 'PROTESTADO' ){
                this.seCambiarEstado = true
                this.estadoLista.push('MATERIALIZADO')

              }
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
            let index = this.endososLista.length - 1
            this.beneficiario2 =  this.endososLista[index].name
            this.fechaCreacion = this.endososLista[index].id
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


  async loadPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }

  generatePdf2() {
    this.generatePdf();
  }

  async generatePdf() {
    await this.loadPdfMaker();


    let title = "Cheque No." +this.id + "\n\n\n\n"
    let content = "El cheque No." + this.id + " fue endosado en favor de " + this.beneficiario2 + " como beneficiario, el dia " +
    this.fechaCreacion + " , con " + this.primerPropietario +  " como librador, y con un valor de " +  this.value + " en Bogota D.C \n\n"

    let endosos = ""
    let n = 0;
    console.log(this.endososLista)
    for (let i in this.endososLista){
      if(n !== (this.endososLista.length-1)){
        let fecha = this.endososLista[i].id
        let name = this.endososLista[i].name
        let publicKey = this.endososLista[i].valor
        endosos = endosos + " - El dia " + fecha + ", el cheque fue endosado en favor de " + name +", identificado con la llave publica " + publicKey + "\n\n"


      }
      n = n+1

    }

    let sub = "El token de la transacción fue " + this.token +  " y el numero del bloque de datos en el blockchain en que fue registrada la transaccion es "  + this.num
    var def = {
      content: [
        {
          text: title,
          style: 'header',
          alignment: 'center'
        },
        {
          text: content,
          style: 'content'
        },
        {
          text: endosos,
          style: 'content2'
        },
        {
          text: sub,
          style: 'subheader',
          alignment: 'center'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true
        },
        content: {
          fontSize: 14
        },
        content2: {
          fontSize: 10
        },
        small: {
          fontSize: 8
        }
      }

    }


    this.pdfMake.createPdf(def).open();
  }

  async onEndosarCheque() {
    this.submited = true;
    if (this.frmCheque.invalid) {
      return false;
    }

    let cheque = this.frmCheque.value;
    let fechaActual = new Date().toString()




    let tempFecha = new Date()
    this.fecha = tempFecha.toDateString()

    let key = null
    let number = 0;
    for(let agent in this.optPortador2){

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

          })

        this.beneficiario = cheque.portador
        this.creado = true
        this.contrato = false
      })


  }
  async onCambiarEstado() {
    this.submited2 = true;
    if (this.frmEstado.invalid) {
      return false;
    }

    let cheque = this.frmEstado.value;


    const payload = obj.updateProperties({
      recordId: this.id,
      properties: [{
        name: "estado",
        dataType: 4,
        stringValue: cheque.estado
      }]
    })

    submit(payload, true)
      .then(()=> {
        this.regresar();
      })



  }

  /**
   * Funcion para abreviar la obtencion de valores de campos del formulario
   */
  get f() {
    return this.frmCheque.controls;
  }

  get t() {
    return this.frmEstado.controls;
  }

  regresar() {
    this.creado = false;
    this.contrato = true;
    this.crear = false;
    this.router.navigate(['/cheques']);
  }
  verCheques() {
    this.cambiar = false;
    this.crear = false;

  }
}
