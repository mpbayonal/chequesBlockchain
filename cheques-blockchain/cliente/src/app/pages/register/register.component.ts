import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {obj}  from '../../services/payloads';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {submit,makePrivateKey,setPrivateKey, getPrivateKey} from '../../services/transactions';
import {get,getPublicKey,hashPassword,post,setAuth} from '../../services/api';
import * as parsing from '../../services/parsing';
import * as _ from 'lodash';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /** email */
  cedula: string = '';
  agents: any[]=[]
  /** email */
  nombre: string = '';
  password: string = '';
  constructor() { }

  ngOnInit() {
  }

  onEnviar() {


    let fromField = this.nombre
    let fromcedula =this.cedula
    let fromnombre = this.password



    const keys = makePrivateKey(fromField)



    let state = {'username': this.cedula, 'email': this.nombre ,'name' : this.nombre}
    const user = _.assign(keys, _.pick(state, 'username', 'email'))
    user.password = hashPassword(fromField)
    const agent = obj.createAgent(_.pick(state, 'name'))

    let t = [{
      "username": this.cedula,
      "password": this.password,
      "publicKey": keys.publicKey,
      "name": this.nombre,
      "email": this.nombre,
      "privateKey": keys.privateKey,
      "encryptedKey": keys.encryptedKey,
      "hashedPassword": hashPassword(this.password.toString())
    }
    ]
//nobuo
    const credentials = {
      username: this.cedula.toString(),
      password: hashPassword(this.password.toString())
    }

    post('http://localhost:8020/authorization', credentials)
      .then(res => {
        console.log(res)

        obj.setAuth(res.authorization)
        setPrivateKey("nobuo",
          res.encryptedKey)

      })

    let pri= ""

    getPrivateKey()
      .then(privateKey => {

        pri = privateKey

      })


    get('http://localhost:8020/agents').then((agents) => {
      this.agents = agents

      console.log(agents)
      console.log(this.agents)



    let u = {
      "records": [
      {
        "recordId": "857668787",
        "recordType": "cheque",
        "properties": [
          {
            "name": "estado",
            "dataType": 4,
            "stringValue": "Activo"
          },
          {
            "name": "tipo",
            "dataType": 4,
            "stringValue": "Fiscal"
          },
          {
            "name": "fecha",
            "dataType": 4,
            "stringValue": "2016"
          },
          {
            "name": "valor",
            "dataType": 4,
            "stringValue": "20000"
          }

        ],
        "ownerIndex": 3,
        "custodianIndex": 0,
        "reporterIndex": 0,
        "reportableProperties": ["estado", "tipo", "fecha", "valor"]
      }
    ],

      "agents": [
      {
        "privateKey": "2f4175fa39e7d2a89884b492d741a494c2b4f1021d3b3deb7c93ab72cc84935c"

      },

      {
        "publicKey": this.agents[2].key
      }
    ]
    }

    console.log(u)
    post('http://localhost:3000/cheques/chequecrear', u )
      .then(res => {
        console.log("res")
        console.log(res)
      })
    })


    let ruta = "http://localhost:8020/records/"+"65563388"
    get(ruta).then((record) => {


      console.log(record)
      })

    let ruta2 = "http://localhost:8020/records?recordType=cheque"
    get(ruta2).then((record) => {


      console.log(record)

    })



  }
}
