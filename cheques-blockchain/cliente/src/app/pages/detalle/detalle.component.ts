import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    this.chequesDisponibles = 23
    this.fondosDisponibles = 2000000



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
