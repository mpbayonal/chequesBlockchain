(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"!creado\">\n\n\n  <div class=\"col-lg-5 col-md-5 col-sm-5\">\n\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-money-coins text-success\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Fondos disponibles</p>\n              <p class=\"card-title\">$ {{ fondosDisponibles }}\n              <p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-lg-7 col-md-7 col-sm-7\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-2 col-md-2\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-globe text-warning\"></i>\n            </div>\n          </div>\n          <div class=\"col-4 col-md-4\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Cheques disponibles</p>\n              <p class=\"card-title\">{{ chequesDisponibles }}\n\n              <p>\n            </div>\n          </div>\n          <div class=\"col-1 col-md-1\">\n\n\n\n\n\n          </div>\n          <div class=\"col-4 col-md-4\">\n\n            <button type=\"submit\" class=\"btn btn-danger btn-round\"  (click)=\"crear = true;\" *ngIf=\"!crear\">Usar cheque</button>\n            <button type=\"submit\" class=\"btn btn-danger btn-round\"  (click)=\"crear = false;\" *ngIf=\"crear\">Ver cheques</button>\n\n\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n\n<div class=\"row\"  *ngIf=\"!crear && !creado\">\n\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Cheques Usados</h4>\n      </div>\n      <div class=\"card-body\">\n        <app-cheques-detalle></app-cheques-detalle>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"row\"  *ngIf=\"crear && !creado\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card card-user\">\n\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n\n\n          <div class=\"col-md-6\">\n            <h3 class=\"card-title\">Bancolombia</h3>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"card-title float-right\">Cheque: {{ idChequeUnique }}</h6>\n          </div>\n        </div>\n        <form [formGroup]=\"frmCheque\" (ngSubmit)=\"onCrearCheque()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-6\">\n                    <label>Paguese a:</label>\n                  </div>\n\n                </div>\n                <select\n                  formControlName=\"portador\"\n                  class=\"form-control input-login\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.portador.errors }\"\n                >\n                  <option value=\"\">Busca el nombre del beneficiario</option>\n                  <option [value]=\"item\" *ngFor=\"let item of optPortador\">{{\n                    item\n                    }}</option>\n                </select>\n\n                <div *ngIf=\"submited && f.portador.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.portador.errors.required\">Nombre del beneficiario es requerido</div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-7\">\n                    <label>La suma de:</label>\n\n                <input\n                  class=\"form-control\"\n                  formControlName=\"suma\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.suma.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí la suma total \"\n                />\n                <div *ngIf=\"submited && f.suma.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.suma.errors.required\">valor requerido</div>\n\n                </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <label>Valor en numeros:</label>\n\n                    <input\n                      class=\"form-control\"\n                      formControlName=\"valor\"\n                      [ngClass]=\"{ 'is-invalid': submited && f.valor.errors }\"\n                      type=\"number\"\n                      placeholder=\"Escribe aquí la suma en numeros\"\n                    />\n                    <div *ngIf=\"submited && f.valor.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.valor.errors.required\">valor requerido</div>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>Lugar</label>\n                <input\n                  class=\"form-control\"\n                  formControlName=\"lugar\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.lugar.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí el lugar\"\n                />\n                <div *ngIf=\"submited && f.lugar.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lugar.errors.required\">Lugar es requerido</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 pl-1\">\n              <div class=\"form-group\">\n                <label>Tipo de cheque:</label>\n                <select\n                  formControlName=\"tipo\"\n                  class=\"form-control input-login\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.tipo.errors }\"\n                >\n                  <option value=\"\">Elige una opción</option>\n                  <option [value]=\"item\" *ngFor=\"let item of optCheque\">{{\n                    item\n                    }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-danger btn-round\">Transferir cheque</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row\"  *ngIf=\"creado\">\n\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\"> Transacción exitosa</h3>\n      </div>\n      <div class=\"card-body\">\n       <h5> El cheque <b>{{ idChequeUnique}}</b> fue librado con <b>Laura Martinez Castro </b> como beneficiaria, el dia <b>2 de octubre de 2020</b>, con Monica Paola Bayona Latorre como libradora, y con un valor de <b>{{frmCheque.value.suma}} de pesos</b> en {{frmCheque.value.lugar}}, y con fecha de vencimiento del <b>2 de abril de 2021</b>.</h5>\n        <h6 class=\"text-center\">El token de la transacción fue <b>00009877bndn8997nbgbg9876</b></h6>\n      </div>\n      <div class=\"row\">\n        <div class=\"update ml-auto mr-auto\">\n          <button  class=\"btn btn-danger btn-round\" (click)=\"regresar()\" >Regresar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card demo-icons\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">100 Awesome Nucleo Icons</h5>\n        <p class=\"card-category\">Handcrafted by our friends from\n          <a href=\"https://nucleoapp.com/?ref=1712\">NucleoApp</a>\n        </p>\n      </div>\n      <div class=\"card-body all-icons\">\n        <div id=\"icons-wrapper\">\n          <section>\n            <ul>\n              <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n              </li>\n              <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n              </li>\n              <!-- list of icons here with the proper class-->\n            </ul>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card \">\n      <div class=\"card-header \">\n        Google Maps\n      </div>\n      <div class=\"card-body \">\n        <div id=\"map\" class=\"map\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">Notifications</h5>\n        <p class=\"card-category\">Handcrafted by our friend\n          <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n          <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n        </p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card card-plain\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title\">Notifications Style</h5>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-info\">\n                  <span>This is a plain notification</span>\n                </div>\n                <div class=\"alert alert-info alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>This is a notification with close button.</span>\n                </div>\n                <div class=\"alert alert-info alert-with-icon alert-dismissible fade show\" data-notify=\"container\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span data-notify=\"icon\" class=\"nc-icon nc-bell-55\"></span>\n                  <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                </div>\n                <div class=\"alert alert-info alert-with-icon alert-dismissible fade show\" data-notify=\"container\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span data-notify=\"icon\" class=\"nc-icon nc-chart-pie-36\"></span>\n                  <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card card-plain\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title\">Notification states</h5>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-primary alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                </div>\n                <div class=\"alert alert-info alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                </div>\n                <div class=\"alert alert-success alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                </div>\n                <div class=\"alert alert-warning alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                </div>\n                <div class=\"alert alert-danger alert-dismissible fade show\">\n                  <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"nc-icon nc-simple-remove\"></i>\n                  </button>\n                  <span>\n                    <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"places-buttons\">\n          <div class=\"row\">\n            <div class=\"col-md-6 ml-auto mr-auto text-center\">\n              <h4 class=\"card-title\">\n                Notifications Places\n                <p class=\"category\">Click to view notifications</p>\n              </h4>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-8 ml-auto mr-auto\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-8 ml-auto mr-auto\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                </div>\n                <div class=\"col-md-4\">\n                  <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table/table.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table/table.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\"> Cheques Recibidos</h4>\n      </div>\n      <div class=\"card-body\">\n        <app-cheques></app-cheques>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typography/typography.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typography/typography.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 class=\"title\">Paper Table Heading</h5>\n        <p class=\"category\">Created using Montserrat Font Family</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"typography-line\">\n          <h1>\n            <span>Header 1</span>The Life of Paper Dashboard </h1>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Header 2</span>The Life of Paper Dashboard </h2>\n        </div>\n        <div class=\"typography-line\">\n          <h3>\n            <span>Header 3</span>The Life of Paper Dashboard </h3>\n        </div>\n        <div class=\"typography-line\">\n          <h4>\n            <span>Header 4</span>The Life of Paper Dashboard </h4>\n        </div>\n        <div class=\"typography-line\">\n          <h5>\n            <span>Header 5</span>The Life of Paper Dashboard </h5>\n        </div>\n        <div class=\"typography-line\">\n          <h6>\n            <span>Header 6</span>The Life of Paper Dashboard </h6>\n        </div>\n        <div class=\"typography-line\">\n          <p>\n            <span>Paragraph</span>\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Quote</span>\n          <blockquote>\n            <p class=\"blockquote blockquote-primary\">\n              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n              <br>\n              <br>\n              <small>\n                - Noaa\n              </small>\n            </p>\n          </blockquote>\n        </div>\n        <div class=\"typography-line\">\n          <span>Muted Text</span>\n          <p class=\"text-muted\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Primary Text</span>\n          <p class=\"text-primary\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Info Text</span>\n          <p class=\"text-info\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Success Text</span>\n          <p class=\"text-success\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Warning Text</span>\n          <p class=\"text-warning\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n          </p>\n        </div>\n        <div class=\"typography-line\">\n          <span>Danger Text</span>\n          <p class=\"text-danger\">\n            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n        </div>\n        <div class=\"typography-line\">\n          <h2>\n            <span>Small Tag</span>\n            Header with small subtitle\n            <br>\n            <small>Use \"small\" tag for the headers</small>\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade/upgrade.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade/upgrade.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"card card-upgrade\">\n      <div class=\"card-header text-center\">\n        <h4 class=\"card-title\">Paper Dashboard PRO Angular</h4>\n          <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Paper Dashboard PRO.</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive table-upgrade\">\n          <table class=\"table\">\n            <thead>\n              <th></th>\n              <th class=\"text-center\">Free</th>\n              <th class=\"text-center\">PRO</th>\n            </thead>\n            <tbody>\n              <tr>\n                <td>Components</td>\n                <td class=\"text-center\">16</td>\n                <td class=\"text-center\">160</td>\n              </tr>\n              <tr>\n                <td>Plugins</td>\n                <td class=\"text-center\">4</td>\n                <td class=\"text-center\">15</td>\n              </tr>\n              <tr>\n                <td>Example Pages</td>\n                <td class=\"text-center\">7</td>\n                <td class=\"text-center\">27</td>\n              </tr>\n              <tr>\n                <td>Login, Register, Pricing, Lock Pages</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>DataTables, VectorMap, SweetAlert, Wizard, FullCalendar etc...</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Mini Sidebar</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td>Premium Support</td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-simple-remove text-danger\"></i></td>\n                <td class=\"text-center\"><i class=\"nc-icon nc-check-2 text-success\"></i></td>\n              </tr>\n              <tr>\n                <td></td>\n                <td class=\"text-center\">Free</td>\n                <td class=\"text-center\">Just $49</td>\n              </tr>\n              <tr>\n                <td class=\"text-center\"></td>\n                <td class=\"text-center\">\n                  <a href=\"#\" class=\"btn btn-round btn-default disabled\">Current Version</a>\n                </td>\n                <td class=\"text-center\">\n                  <a target=\"_blank\" href=\"https://www.creative-tim.com/product/paper-dashboard-pro-angular?ref=pd-free-angular-upgrade-live\" class=\"btn btn-round btn-primary\">Upgrade to PRO</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-globe text-warning\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Cheques disponibles</p>\n              <p class=\"card-title\">{{ chequesDisponibles }}\n              <p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-lg-6 col-md-6 col-sm-6\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-4\">\n            <div class=\"icon-big text-center icon-warning\">\n              <i class=\"nc-icon nc-money-coins text-success\"></i>\n            </div>\n          </div>\n          <div class=\"col-7 col-md-8\">\n            <div class=\"numbers\">\n              <p class=\"card-category\">Fondos disponibles</p>\n              <p class=\"card-title\">$ {{ fondosDisponibles }}\n              <p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n\n  <div class=\"col-md-12\">\n    <p >Transferir cheque por primera vez</p>\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card card-user\">\n\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n\n\n          <div class=\"col-md-6\">\n            <h3 class=\"card-title\">Bancolombia</h3>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"card-title float-right\">Cheque No.  {{ idCheque }}</h6>\n          </div>\n        </div>\n        <form [formGroup]=\"frmCheque\" (ngSubmit)=\"onCrearCheque()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-6\">\n                    <label>Paguese a:</label>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"float-right\">o al portador</label>\n\n                  </div>\n                </div>\n                <input\n                  class=\"form-control\"\n                  formControlName=\"portador\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.portador.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí el nombre del beneficiario\"\n                />\n                <div *ngIf=\"submited && f.portador.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.portador.errors.required\">Nombre del beneficiario es requerido</div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                    <label>La suma de:</label>\n                  </div>\n                </div>\n                <input\n                  class=\"form-control\"\n                  formControlName=\"suma\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.suma.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí la suma total \"\n                />\n                <div *ngIf=\"submited && f.suma.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.suma.errors.required\">valor requerido</div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>Lugar</label>\n                <input\n                  class=\"form-control\"\n                  formControlName=\"lugar\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.lugar.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí el lugar\"\n                />\n                <div *ngIf=\"submited && f.lugar.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lugar.errors.required\">Lugar es requerido</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 pl-1\">\n              <div class=\"form-group\">\n                <label>Tipo de cheque:</label>\n                <select\n                  formControlName=\"tipo\"\n                  class=\"form-control input-login\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.tipo.errors }\"\n                >\n                  <option value=\"\">Elige una opción</option>\n                  <option [value]=\"item\" *ngFor=\"let item of optCheque\">{{\n                    item\n                    }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-danger btn-round\">Transferir cheque</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/typography/typography.component */ "./src/app/pages/typography/typography.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");
/* harmony import */ var _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/upgrade/upgrade.component */ "./src/app/pages/upgrade/upgrade.component.ts");
/* harmony import */ var _pages_Components_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/Components/cheques/cheques.component */ "./src/app/pages/Components/cheques/cheques.component.ts");
/* harmony import */ var _pages_Components_cheques_detalle_cheques_detalle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/Components/cheques-detalle/cheques-detalle.component */ "./src/app/pages/Components/cheques-detalle/cheques-detalle.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



















let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_16__["Ng2SmartTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _pages_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
            _pages_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
            _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_13__["UpgradeComponent"],
            _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
            _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__["IconsComponent"],
            _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_11__["MapsComponent"],
            _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
            _pages_Components_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_14__["ChequesComponent"],
            _pages_Components_cheques_detalle_cheques_detalle_component__WEBPACK_IMPORTED_MODULE_15__["ChequesDetalleComponent"],
            _pages_Components_cheques_cheques_component__WEBPACK_IMPORTED_MODULE_14__["ButtonViewComponent"]
        ]
    })
], AdminLayoutModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/detalle/detalle.component */ "./src/app/pages/detalle/detalle.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");
/* harmony import */ var _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/upgrade/upgrade.component */ "./src/app/pages/upgrade/upgrade.component.ts");









const AdminLayoutRoutes = [
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'user', component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] },
    { path: 'cheques', component: _pages_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"] },
    { path: 'cheque/:id', component: _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_4__["DetalleComponent"] },
    { path: 'icons', component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"] },
    { path: 'maps', component: _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_6__["MapsComponent"] },
    { path: 'notifications', component: _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"] },
    { path: 'upgrade', component: _pages_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_8__["UpgradeComponent"] }
];


/***/ }),

/***/ "./src/app/pages/Components/cheques-detalle/cheques-detalle.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/Components/cheques-detalle/cheques-detalle.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChequesDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequesDetalleComponent", function() { return ChequesDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cheques_cheques_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cheques/cheques.component */ "./src/app/pages/Components/cheques/cheques.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api */ "./src/app/services/api.js");





let ChequesDetalleComponent = class ChequesDetalleComponent {
    constructor() {
        this.settings = {
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
                                { value: 'General', title: 'General' },
                                { value: 'Abono en cuenta', title: 'Abono en cuenta' },
                                { value: 'No negociable', title: 'No negociable' },
                                { value: 'Fiscal', title: 'Fiscal' },
                            ],
                        },
                    },
                },
                valor: {
                    title: 'Valor',
                },
                name: {
                    title: 'Beneficiario',
                },
                button: {
                    title: '',
                    type: 'custom',
                    filter: false,
                    renderComponent: _cheques_cheques_component__WEBPACK_IMPORTED_MODULE_2__["ButtonViewComponent"],
                    onComponentInitFunction(instance) {
                        instance.save.subscribe(row => {
                        });
                    }
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        let usersdict = {};
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('agents')
            .then(agents => {
            for (let i in agents) {
                usersdict[agents[i].key] = agents[i];
            }
            let recordsList = [];
            Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('records?recordType=cheque').then((records) => {
                for (let i in records) {
                    let newRecord = records[i];
                    const publicKey = Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["getPublicKey"])();
                    if (newRecord.owner === publicKey) {
                        let tipo = null;
                        let estado = null;
                        let valor = null;
                        for (let j in newRecord.properties) {
                            let propertie = newRecord.properties[j];
                            if (propertie.name === "tipo") {
                                tipo = propertie.value;
                            }
                            if (propertie.name === "estado") {
                                estado = propertie.value;
                            }
                            if (propertie.name === "valor") {
                                valor = propertie.value;
                            }
                        }
                        console.log(newRecord.updates.custodians[1]);
                        let temp = {
                            id: newRecord.recordId,
                            valor: valor,
                            name: usersdict[newRecord.updates.custodians[1].agentId].name,
                            tipo: tipo,
                            button: 'Ver',
                        };
                        recordsList.push(temp);
                    }
                }
                console.log(recordsList);
                this.source.load(recordsList);
            });
        });
    }
};
ChequesDetalleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cheques-detalle',
        template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChequesDetalleComponent);



/***/ }),

/***/ "./src/app/pages/Components/cheques/cheques.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/Components/cheques/cheques.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonViewComponent, ChequesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonViewComponent", function() { return ButtonViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequesComponent", function() { return ChequesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api */ "./src/app/services/api.js");





let ButtonViewComponent = class ButtonViewComponent {
    constructor(router) {
        this.router = router;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }
    onClick() {
        console.log(this.rowData);
        this.router.navigate(['/cheque', this.rowData.id]);
        this.save.emit(this.rowData);
    }
};
ButtonViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ButtonViewComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ButtonViewComponent.prototype, "rowData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ButtonViewComponent.prototype, "save", void 0);
ButtonViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'button-view',
        template: `
    <button class="btn btn-sm btn-outline-default btn-round" (click)="onClick()">Ver</button>
  `,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ButtonViewComponent);

let ChequesComponent = class ChequesComponent {
    constructor() {
        this.settings = {
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
                                { value: 'General', title: 'General' },
                                { value: 'Abono en cuenta', title: 'Abono en cuenta' },
                                { value: 'No negociable', title: 'No negociable' },
                                { value: 'Fiscal', title: 'Fiscal' },
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
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        let usersdict = {};
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('agents')
            .then(agents => {
            for (let i in agents) {
                usersdict[agents[i].key] = agents[i];
            }
            let recordsList = [];
            Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('records?recordType=cheque').then((records) => {
                for (let i in records) {
                    let newRecord = records[i];
                    const publicKey = Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["getPublicKey"])();
                    let n = 0;
                    for (let i in newRecord.updates.custodians) {
                        if (n !== 0) {
                            if (newRecord.updates.custodians[i].agentId === publicKey) {
                                let librador = usersdict[newRecord.updates.custodians[n - 1].agentId].name;
                                let tipo = null;
                                let estado = null;
                                let valor = null;
                                for (let j in newRecord.properties) {
                                    let propertie = newRecord.properties[j];
                                    if (propertie.name === "tipo") {
                                        tipo = propertie.value;
                                    }
                                    if (propertie.name === "estado") {
                                        estado = propertie.value;
                                    }
                                    if (propertie.name === "valor") {
                                        valor = propertie.value;
                                    }
                                }
                                console.log(newRecord.updates.custodians[1]);
                                let temp = {
                                    id: newRecord.recordId,
                                    valor: valor,
                                    name: librador,
                                    tipo: tipo,
                                    passed: newRecord.final,
                                    button: 'Ver',
                                };
                                recordsList.push(temp);
                            }
                        }
                        n = n + 1;
                    }
                }
                console.log(recordsList);
                this.source.load(recordsList);
            });
        });
    }
};
ChequesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cheques',
        template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChequesComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_payloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payloads */ "./src/app/services/payloads.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transactions */ "./src/app/services/transactions.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api */ "./src/app/services/api.js");






let DashboardComponent = class DashboardComponent {
    constructor(fb) {
        this.fb = fb;
        /** Bandera para evaluar si se esta enviando el formulario de datos */
        this.submited = false;
        /** Bandera para evaluar si se esta enviando el formulario de datos */
        this.creado = false;
        /** Opciones de cargo en tipo de usuario Ferretero */
        this.optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];
        this.optPortador = [];
        this.crear = false;
        this.idChequeUnique = "";
        this.portadorNombre = "";
        this.agentesLista = [];
        this.idChequeUnique = this.generateId(20);
        this.frmCheque = this.fb.group({
            portador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            suma: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    ngOnInit() {
        let t = Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["getPublicKey"])();
        console.log(t);
        let user = null;
        Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["get"])('agents')
            .then(agents => {
            const publicKey = Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["getPublicKey"])();
            var agent = null;
            for (agent of agents) {
                if (agent.key !== publicKey) {
                    this.optPortador.push(agent.key);
                }
            }
        });
        Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["get"])(`agents/${t}`)
            .then(agent => {
            user = agent;
            console.log(user);
        });
        let ruta2 = "http://localhost:8020/records?recordType=cheque";
        Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["get"])(ruta2).then((record) => {
            console.log(record);
        });
        this.chequesDisponibles = 23;
        this.fondosDisponibles = 2000000;
    }
    /**
     * Funcion que valida y envia al registro la informacion del formulario
     */
    onCrearCheque() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submited = true;
            if (this.frmCheque.invalid) {
                return false;
            }
            let cheque = this.frmCheque.value;
            let fechaActual = new Date().toString();
            console.log(fechaActual);
            const newrecord = yield _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createRecord({
                recordId: this.idChequeUnique,
                recordType: 'cheque',
                properties: [
                    {
                        name: 'estado',
                        stringValue: "ACTIVO",
                        dataType: _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createRecord.enum.STRING
                    },
                    {
                        name: 'tipo',
                        stringValue: cheque.tipo,
                        dataType: _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createRecord.enum.STRING
                    },
                    {
                        name: 'valor',
                        numberValue: cheque.valor,
                        dataType: _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createRecord.enum.NUMBER
                    },
                ]
            });
            console.log(newrecord);
            const reporterPayloads2 = yield _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createProposal({
                recordId: this.idChequeUnique,
                receivingAgent: cheque.portador,
                role: _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createProposal.enum.CUSTODIAN,
                properties: []
            });
            const payload = _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].updateProperties({
                recordId: this.idChequeUnique,
                properties: [{
                        name: "estado",
                        dataType: 4,
                        stringValue: "ENDOSO"
                    }]
            });
            Object(_services_transactions__WEBPACK_IMPORTED_MODULE_4__["submit"])([newrecord].concat(reporterPayloads2), true, "false")
                .then(() => {
                Object(_services_transactions__WEBPACK_IMPORTED_MODULE_4__["submit"])(payload, true)
                    .then(() => Object(_services_api__WEBPACK_IMPORTED_MODULE_5__["get"])(`records/${this.idChequeUnique}`))
                    .then(property => {
                    console.log(property);
                });
                let agent3 = null;
                for (agent3 of this.agentesLista) {
                    if (agent3.key === cheque.portador) {
                        this.portadorNombre = agent3.name;
                    }
                }
                this.creado = true;
            });
        });
    }
    dec2hex(dec) {
        return dec < 10
            ? '0' + String(dec)
            : dec.toString(16);
    }
    // generateId :: Integer -> String
    generateId(len) {
        var arr = new Uint8Array((len || 40) / 2);
        window.crypto.getRandomValues(arr);
        return Array.from(arr, this.dec2hex).join('');
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
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardComponent.prototype, "signingKey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardComponent.prototype, "state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardComponent.prototype, "idCheque", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardComponent.prototype, "chequesDisponibles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardComponent.prototype, "fondosDisponibles", void 0);
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/icons/icons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IconsComponent = class IconsComponent {
};
IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'icons-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html")).default
    })
], IconsComponent);



/***/ }),

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MapsComponent = class MapsComponent {
    ngOnInit() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    }
};
MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'maps-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html")).default
    })
], MapsComponent);



/***/ }),

/***/ "./src/app/pages/notifications/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



let NotificationsComponent = class NotificationsComponent {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showNotification(from, align) {
        const color = Math.floor(Math.random() * 5 + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 2:
                this.toastr.success('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 3:
                this.toastr.warning('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 4:
                this.toastr.error('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 5:
                this.toastr.show('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>', "", {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            default:
                break;
        }
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'notifications-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notifications/notifications.component.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TableComponent = class TableComponent {
    ngOnInit() {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    }
};
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'table-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table/table.component.html")).default
    })
], TableComponent);



/***/ }),

/***/ "./src/app/pages/typography/typography.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TypographyComponent = class TypographyComponent {
};
TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'typography-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/typography/typography.component.html")).default
    })
], TypographyComponent);



/***/ }),

/***/ "./src/app/pages/upgrade/upgrade.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/upgrade/upgrade.component.ts ***!
  \****************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UpgradeComponent = class UpgradeComponent {
    ngOnInit() {
    }
};
UpgradeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'upgrade-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upgrade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upgrade/upgrade.component.html")).default
    })
], UpgradeComponent);



/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ "./src/app/services/api.js");




let UserComponent = class UserComponent {
    constructor(fb) {
        this.fb = fb;
        /** Bandera para evaluar si se esta enviando el formulario de datos */
        this.submited = false;
        /** Opciones de cargo en tipo de usuario Ferretero */
        this.optCheque = ['Cruzado', 'Abono en cuenta', 'No negociable', 'Fiscal'];
        /** email */
        this.cedula = '';
        /** email */
        this.nombre = '';
        this.password = '';
        this.frmCheque = this.fb.group({
            portador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            suma: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_3__["get"])('agents')
            .then(agents => {
            const publicKey = Object(_services_api__WEBPACK_IMPORTED_MODULE_3__["getPublicKey"])();
            this.state.agents = agents.filter(agent => agent.key !== publicKey);
        });
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
};
UserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserComponent.prototype, "signingKey", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserComponent.prototype, "state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserComponent.prototype, "idCheque", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserComponent.prototype, "chequesDisponibles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserComponent.prototype, "fondosDisponibles", void 0);
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-cmp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], UserComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module-es2015.js.map