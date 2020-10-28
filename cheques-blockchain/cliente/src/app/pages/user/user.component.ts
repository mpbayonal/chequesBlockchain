import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as payloads from '../../services/payloads';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {submit} from '../../services/transactions';
import {get,getPublicKey} from '../../services/api';
import * as parsing from '../../services/parsing';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  /** Formulario de control para el login de usuarios */
  public frmCheque: FormGroup;
  /** Bandera para evaluar si se esta enviando el formulario de datos */
  public submited = false;
  /** Opciones de cargo en tipo de usuario Ferretero */
  public optCheque = ['Cruzado', 'Abono en cuenta', 'No negociable', 'Fiscal'];

  @Input() signingKey: any;
  @Input() state: any;
  @Input() idCheque:any;
  @Input() chequesDisponibles:any;
  @Input() fondosDisponibles:any;
  /** email */
  cedula: string = '';
  /** email */
  nombre: string = '';
  password: string = '';

  constructor(
    public fb: FormBuilder,
  ) {
    this.frmCheque = this.fb.group({
      portador: ['', [Validators.required]],
      suma: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });

  }

    ngOnInit(){

      get('agents')
        .then(agents => {
          const publicKey = getPublicKey()
          this.state.agents = agents.filter(agent => agent.key !== publicKey)
        })

    }
  /**
   * Funcion que valida y envia al registro la informacion del formulario
   */


  /**
   * Funcion para abreviar la obtencion de valores de campos del formulario
   */
  get f() {
    return this.frmCheque.controls;
  }

}
