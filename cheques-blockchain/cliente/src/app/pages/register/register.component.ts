import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {obj}  from '../../services/payloads';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {submit,makePrivateKey,setPrivateKey, getPrivateKey,clearPrivateKey} from '../../services/transactions';
import {get,getPublicKey,hashPassword,post,setAuth,clearAuth} from '../../services/api';
import {Router} from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
    clearAuth()
    clearPrivateKey()
  }

  onEnviar() {
    clearAuth()
    clearPrivateKey()



    get('agents').then((agents) => {
      this.agents = agents

      console.log(agents)
      console.log(this.agents)
    })


    const keys = makePrivateKey(this.password);



    let state = {'username': this.cedula.toString(), 'email': this.nombre ,'name' : this.nombre}
    const user = _.assign(keys, _.pick(state, 'username', 'email'))

    user.password = hashPassword(this.password)

    const agent2 = obj.createAgent(_.pick(state, 'name'))
    submit(agent2, true,this.password ) .then(() => post('users', user)).then(res => setAuth(res.authorization)).then(
      this.router.navigateByUrl('/dashboard')
      )





  }

}
