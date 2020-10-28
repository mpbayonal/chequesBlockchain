import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {obj}  from '../services/payloads';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {submit,makePrivateKey,setPrivateKey, getPrivateKey} from '../services/transactions';
import {get,getPublicKey,hashPassword,post,setAuth, getAuth} from '../services/api';
import * as _ from 'lodash';

declare interface user {
  imagen: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logueado = new BehaviorSubject(false);

  public user: any;
  public headers: HttpHeaders;


  constructor(private http: HttpClient, public authService: AuthService, public httpOld: Http) {

    this.headers = new HttpHeaders({"Content-Type": "application/json"});


  }
  public getToken() {
    const token2 = localStorage.getItem('user');
    this.user = token2;
    return this.user;
  }


  get(object: String) {
    this.headers = new HttpHeaders({"Content-Type": "application/json"});
    return this.http.get("http://127.0.0.1:5000/" + '' + object, { headers: this.headers });
  }

  post(object: String, data: any) {
    this.headers = new HttpHeaders({"Content-Type": "application/json"});
    return this.http.post("http://127.0.0.1:5000/" + '' + object, JSON.stringify(data), { headers: this.headers });
  }

  public setUser(user, pass) {
    const credentials = {
      username: user,
      password: hashPassword(pass)
    }

    post('http://localhost:8020/authorization', credentials)
      .then(res => {

        obj.setAuth(res.authorization)
        setPrivateKey("nobuo",
          res.encryptedKey)

      })


}

}
