function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n\n    <div class=\"sidebar\" data-color=\"black\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAuthLayoutAuthLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper2\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n       Pagares\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text\"></span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">\n                Registrarse</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Iniciar sesión</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetalleDetalleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" *ngIf=\"!creado\">\n\n\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n    <div class=\"card card-stats\">\n      <div class=\"card-body \">\n        <div class=\"row\">\n\n          <div class=\"col-7 col-md-7\">\n            <div >\n              <h6 >Id del Cheque</h6>\n              <p >{{id}}\n\n              <p>\n            </div>\n            <div >\n              <h6 >Valor</h6>\n              <p >{{value}}\n\n              <p>\n            </div>\n            <div >\n              <h6 >Estado</h6>\n              <p>{{estado}}\n\n              <p>\n            </div>\n            <div >\n              <h6 >Primer Propietario</h6>\n              <p >{{primerPropietario}}\n\n              <p>\n            </div>\n            <div >\n              <h6 >Tipo</h6>\n              <p >{{tipo}}\n\n              <p>\n            </div>\n            <div >\n              <h6>Los fondos existen</h6>\n              <p >Si\n\n              <p>\n            </div>\n          </div>\n          <div class=\"col-1 col-md-1\">\n\n\n\n\n\n          </div>\n          <div class=\"col-4 col-md-4\"  *ngIf=\"sePuedeEndosar\">\n\n            <button type=\"submit\" class=\"btn btn-danger btn-round\"  (click)=\"crear = true;\" *ngIf=\"!crear\">Endosar cheque</button>\n            <button type=\"submit\" class=\"btn btn-danger btn-round\"  (click)=\"crear = false;\" *ngIf=\"crear\">Ver cheques</button>\n\n\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n\n<div class=\"row\"  *ngIf=\"!crear && !creado\">\n\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Cadena de Endosos</h4>\n      </div>\n      <div class=\"card-body\">\n        <app-detalle-cheque-tabla [data]=\"endososLista\" ></app-detalle-cheque-tabla>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\"  *ngIf=\"!crear && !creado\">\n\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">Historial de estados</h4>\n      </div>\n      <div class=\"card-body\">\n        <state-tabla [data]=\"estadosLista\"></state-tabla>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"row\"  *ngIf=\"crear && !creado\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card card-user\">\n\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n\n\n          <div class=\"col-md-6\">\n            <h3 class=\"card-title\">Bancolombia</h3>\n          </div>\n          <div class=\"col-md-6\">\n            <h6 class=\"card-title float-right\">Cheque No. 56878786  {{ idCheque }}</h6>\n          </div>\n        </div>\n        <form [formGroup]=\"frmCheque\" (ngSubmit)=\"onCrearCheque()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-6\">\n                    <label>Endosar a:</label>\n                  </div>\n\n                </div>\n                <input\n                  class=\"form-control\"\n                  formControlName=\"portador\"\n                  [ngClass]=\"{ 'is-invalid': submited && f.portador.errors }\"\n                  type=\"text\"\n                  placeholder=\"Escribe aquí el nombre del beneficiario\"\n                />\n                <div *ngIf=\"submited && f.portador.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.portador.errors.required\">Nombre del beneficiario es requerido</div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-md-12 pr-1\">\n\n              <div class=\"form-group\">\n                <div class=\"row\">\n\n\n                  <div class=\"col-md-7\">\n                    <label>Cedula</label>\n\n                    <input\n                      class=\"form-control\"\n                      formControlName=\"valor\"\n                      [ngClass]=\"{ 'is-invalid': submited && f.valor.errors }\"\n                      type=\"number\"\n                      placeholder=\"Escribe aquí la cedula\"\n                    />\n                    <div *ngIf=\"submited && f.valor.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.valor.errors.required\">valor requerido</div>\n\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-danger btn-round\">Endosar cheque</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"row\"  *ngIf=\"creado\">\n\n\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\"> Transacción exitosa</h3>\n      </div>\n      <div class=\"card-body\">\n        <h5> El cheque <b>No. 56878786</b> fue endosado en favor de <b>Laura Martinez Castro </b> como beneficiaria, el dia <b>14 de octubre de 2020</b>, con Monica Paola Bayona Latorre como libradora, y con un valor de <b>dos millones de pesos</b> en Bogota D.C, y con fecha de vencimiento del <b>2 de abril de 2021</b>.</h5>\n        <h6 class=\"text-center\">El token de la transacción fue <b>00009877bndn8997nbgbg9876</b></h6>\n      </div>\n      <div class=\"row\">\n        <div class=\"update ml-auto mr-auto\">\n          <button  class=\"btn btn-danger btn-round\" (click)=\"regresar()\" >Regresar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFixedpluginFixedpluginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n\n        <div class=\"copyright pull-right\">\n          Made by Paola Bayona\n        </div>\n    </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n      Cheques\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./layouts/admin-layout/admin-layout.module": ["./src/app/layouts/admin-layout/admin-layout.module.ts", "default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module", "layouts-admin-layout-admin-layout-module"],
      "./layouts/auth-layout/auth-layout.module": ["./src/app/layouts/auth-layout/auth-layout.module.ts", "default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module", "layouts-auth-layout-auth-layout-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-smart-table */
    "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidebar/sidebar.module */
    "./src/app/sidebar/sidebar.module.ts");
    /* harmony import */


    var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/footer/footer.module */
    "./src/app/shared/footer/footer.module.ts");
    /* harmony import */


    var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/navbar/navbar.module */
    "./src/app/shared/navbar/navbar.module.ts");
    /* harmony import */


    var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/fixedplugin/fixedplugin.module */
    "./src/app/shared/fixedplugin/fixedplugin.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layouts/auth-layout/auth-layout.component */
    "./src/app/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/detalle/detalle.component */
    "./src/app/pages/detalle/detalle.component.ts");
    /* harmony import */


    var _pages_Components_detalle_cheque_tabla_detalle_cheque_tabla_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/Components/detalle-cheque-tabla/detalle-cheque-tabla.component */
    "./src/app/pages/Components/detalle-cheque-tabla/detalle-cheque-tabla.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _state_table_state_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./state-table/state-table.component */
    "./src/app/state-table/state-table.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"], _pages_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_14__["DetalleComponent"], _pages_Components_detalle_cheque_tabla_detalle_cheque_tabla_component__WEBPACK_IMPORTED_MODULE_15__["DetalleChequeTablaComponent"], _state_table_state_table_component__WEBPACK_IMPORTED_MODULE_17__["StateTableComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"], {
        useHash: true
      }), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_9__["FixedPluginModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"]],
      providers: [],
      exports: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutes */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/auth-layout/auth-layout.component */
    "./src/app/layouts/auth-layout/auth-layout.component.ts");

    var AppRoutes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '',
      component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__["AdminLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
    }, {
      path: '',
      component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }]
    }, {
      path: '**',
      redirectTo: 'login'
    }];
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent() {
        _classCallCheck(this, AdminLayoutComponent);
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/layouts/admin-layout/admin-layout.component.scss"))["default"]]
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: AuthLayoutComponent */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthLayoutComponent =
    /*#__PURE__*/
    function () {
      function AuthLayoutComponent(router) {
        _classCallCheck(this, AuthLayoutComponent);

        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var html = document.getElementsByTagName("html")[0];
          html.classList.add("auth-layout");
          var body = document.getElementsByTagName("body")[0];
          body.classList.add("bg-default");
          this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var html = document.getElementsByTagName("html")[0];
          html.classList.remove("auth-layout");
          var body = document.getElementsByTagName("body")[0];
          body.classList.remove("bg-default");
        }
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth-layout.component.scss */
      "./src/app/layouts/auth-layout/auth-layout.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/Components/detalle-cheque-tabla/detalle-cheque-tabla.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/Components/detalle-cheque-tabla/detalle-cheque-tabla.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DetalleChequeTablaComponent */

  /***/
  function srcAppPagesComponentsDetalleChequeTablaDetalleChequeTablaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleChequeTablaComponent", function () {
      return DetalleChequeTablaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DetalleChequeTablaComponent = function DetalleChequeTablaComponent() {
      _classCallCheck(this, DetalleChequeTablaComponent);

      this.settings = {
        actions: {
          add: false,
          edit: false,
          "delete": false
        },
        columns: {
          id: {
            title: 'Fecha'
          },
          valor: {
            title: 'Public Key'
          },
          name: {
            title: 'Nombre'
          }
        }
      };
      this.data = this.endosos;
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleChequeTablaComponent.prototype, "endosos", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleChequeTablaComponent.prototype, "data", void 0);
    DetalleChequeTablaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalle-cheque-tabla',
      template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DetalleChequeTablaComponent);
    /***/
  },

  /***/
  "./src/app/pages/detalle/detalle.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/detalle/detalle.component.ts ***!
    \****************************************************/

  /*! exports provided: DetalleComponent */

  /***/
  function srcAppPagesDetalleDetalleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleComponent", function () {
      return DetalleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api */
    "./src/app/services/api.js");

    var DetalleComponent =
    /*#__PURE__*/
    function () {
      function DetalleComponent(router, route, fb) {
        _classCallCheck(this, DetalleComponent);

        this.router = router;
        this.route = route;
        this.fb = fb;
        /** Bandera para evaluar si se esta enviando el formulario de datos */

        this.submited = false;
        /** Bandera para evaluar si se esta enviando el formulario de datos */

        this.creado = false;
        /** Opciones de cargo en tipo de usuario Ferretero */

        this.optCheque = ['General', 'Abono en cuenta', 'No negociable', 'Fiscal'];
        this.endososLista = [];
        this.estadosLista = [];
        this.crear = false;
        this.frmCheque = this.fb.group({
          portador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          suma: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          lugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(DetalleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // import ActivatedRoute
          var id = this.route.snapshot.paramMap.get('id');
          this.id = id;
          console.log(id);
          this.chequesDisponibles = 23;
          this.fondosDisponibles = 2000000;
          var usersdict = {};
          Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('agents').then(function (agents) {
            for (var i in agents) {
              usersdict[agents[i].key] = agents[i];
            }

            Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])("records/".concat(id)).then(function (newRecord) {
              var tipo = null;
              var estado = null;
              var valor = null;

              for (var j in newRecord.properties) {
                var propertie = newRecord.properties[j];

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

              var t = Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["getPublicKey"])();
              console.log(t);
              console.log(newRecord.custodian);
              _this2.tipo = tipo;
              _this2.estado = estado;
              _this2.value = valor;
              _this2.primerPropietario = usersdict[newRecord.owner].name;

              if (newRecord.custodian.toString() === t.toString() && tipo != 'No negociable') {
                _this2.sePuedeEndosar = true;
              }

              var endoso = [];

              for (var y in newRecord.updates.custodians) {
                var dateTemp = new Date(newRecord.updates.custodians[y].timestamp * 1000).toDateString();
                var temp = {
                  id: dateTemp,
                  valor: newRecord.updates.custodians[y].agentId,
                  name: usersdict[newRecord.updates.custodians[y].agentId].name
                };
                endoso.push(temp);
              }

              _this2.endososLista = endoso;
              console.log(_this2.endososLista);
              var estadoList = [];

              for (var _y in newRecord.updates.properties.estado) {
                var _dateTemp = new Date(newRecord.updates.properties.estado[_y].timestamp * 1000).toDateString();

                var _temp = {
                  id: _dateTemp,
                  estado: newRecord.updates.properties.estado[_y].value
                };
                estadoList.push(_temp);
              }

              _this2.estadosLista = estadoList;
            });
          });
        }
        /**
         * Funcion que valida y envia al registro la informacion del formulario
         */

      }, {
        key: "onCrearCheque",
        value: function onCrearCheque() {
          this.submited = true;

          if (this.frmCheque.invalid) {
            return false;
          }

          this.creado = true;
          var cheque = this.frmCheque.value;
          console.log(cheque);
        }
        /**
         * Funcion para abreviar la obtencion de valores de campos del formulario
         */

      }, {
        key: "regresar",
        value: function regresar() {
          this.creado = false;
          this.crear = false;
        }
      }, {
        key: "f",
        get: function get() {
          return this.frmCheque.controls;
        }
      }]);

      return DetalleComponent;
    }();

    DetalleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleComponent.prototype, "signingKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleComponent.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleComponent.prototype, "idCheque", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleComponent.prototype, "chequesDisponibles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DetalleComponent.prototype, "fondosDisponibles", void 0);
    DetalleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detalle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detalle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle/detalle.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], DetalleComponent);
    /***/
  },

  /***/
  "./src/app/services/api.js":
  /*!*********************************!*\
    !*** ./src/app/services/api.js ***!
    \*********************************/

  /*! exports provided: hashPassword, getAuth, setAuth, clearAuth, getPublicKey, baseRequest, request, get, post, patch, postBinary */

  /***/
  function srcAppServicesApiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hashPassword", function () {
      return hashPassword;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAuth", function () {
      return getAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setAuth", function () {
      return setAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearAuth", function () {
      return clearAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPublicKey", function () {
      return getPublicKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseRequest", function () {
      return baseRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "request", function () {
      return request;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "get", function () {
      return get;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "post", function () {
      return post;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "patch", function () {
      return patch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "postBinary", function () {
      return postBinary;
    });
    /**
     * Copyright 2017 Intel Corporation
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * ----------------------------------------------------------------------------
     */


    var m = __webpack_require__(
    /*! mithril */
    "./node_modules/mithril/mithril.js");

    var _ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");

    var sjcl = __webpack_require__(
    /*! sjcl */
    "./node_modules/sjcl/sjcl.js");

    var API_PATH = 'http://localhost:8020/';
    var STORAGE_KEY = 'fish_net.authorization';
    var authToken = null;
    /**
     * Generates a base-64 encoded SHA-256 hash of a plain text password
     * for submission to authorization routes
     */

    var hashPassword = function hashPassword(password) {
      var bits = sjcl.hash.sha256.hash(password);
      return sjcl.codec.base64.fromBits(bits);
    };
    /**
     * Getters and setters to handle the auth token both in memory and storage
     */


    var getAuth = function getAuth() {
      if (!authToken) {
        authToken = window.localStorage.getItem(STORAGE_KEY);
      }

      return authToken;
    };

    var setAuth = function setAuth(token) {
      window.localStorage.setItem(STORAGE_KEY, token);
      authToken = token;
      return authToken;
    };

    var clearAuth = function clearAuth() {
      var token = getAuth();
      window.localStorage.clear(STORAGE_KEY);
      authToken = null;
      return token;
    };
    /**
     * Parses the authToken to return the logged in user's public key
     */


    var getPublicKey = function getPublicKey() {
      var token = getAuth();
      if (!token) return null;
      return window.atob(token.split('.')[1]);
    }; // Adds Authorization header and prepends API path to url


    var baseRequest = function baseRequest(opts) {
      var Authorization = getAuth();
      var authHeader = Authorization ? {
        Authorization: Authorization
      } : {};
      opts.headers = _.assign(opts.headers, authHeader);
      opts.url = API_PATH + opts.url;
      return m.request(opts);
    };
    /**
     * Submits a request to an api endpoint with an auth header if present
     */


    var request = function request(method, endpoint, data) {
      return baseRequest({
        method: method,
        url: endpoint,
        data: data
      });
    };
    /**
     * Method specific versions of request
     */


    var get = _.partial(request, 'GET');

    var post = _.partial(request, 'POST');

    var patch = _.partial(request, 'PATCH');
    /**
     * Method for posting a binary file to the API
     */


    var postBinary = function postBinary(endpoint, data) {
      return baseRequest({
        method: 'POST',
        url: endpoint,
        headers: {
          'Content-Type': 'application/octet-stream'
        },
        // prevent Mithril from trying to JSON stringify the body
        serialize: function serialize(x) {
          return x;
        },
        data: data
      });
    };
    /***/

  },

  /***/
  "./src/app/shared/fixedplugin/fixedplugin.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
    \*************************************************************/

  /*! exports provided: FixedPluginComponent */

  /***/
  function srcAppSharedFixedpluginFixedpluginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
      return FixedPluginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FixedPluginComponent =
    /*#__PURE__*/
    function () {
      function FixedPluginComponent() {
        _classCallCheck(this, FixedPluginComponent);

        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
      }

      _createClass(FixedPluginComponent, [{
        key: "changeSidebarColor",
        value: function changeSidebarColor(color) {
          var sidebar = document.querySelector('.sidebar');
          this.sidebarColor = color;

          if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
          }
        }
      }, {
        key: "changeSidebarActiveColor",
        value: function changeSidebarActiveColor(color) {
          var sidebar = document.querySelector('.sidebar');
          this.sidebarActiveColor = color;

          if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FixedPluginComponent;
    }();

    FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fixedplugin-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html"))["default"]
    })], FixedPluginComponent);
    /***/
  },

  /***/
  "./src/app/shared/fixedplugin/fixedplugin.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
    \**********************************************************/

  /*! exports provided: FixedPluginModule */

  /***/
  function srcAppSharedFixedpluginFixedpluginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
      return FixedPluginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fixedplugin.component */
    "./src/app/shared/fixedplugin/fixedplugin.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var FixedPluginModule = function FixedPluginModule() {
      _classCallCheck(this, FixedPluginModule);
    };

    FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
      exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })], FixedPluginModule);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.test = new Date();
    };

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'footer-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/footer/footer.module.ts ***!
    \************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppSharedFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })], FooterModule);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../sidebar/sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(location, renderer, element, router) {
        _classCallCheck(this, NavbarComponent);

        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
            return listTitle;
          });
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
          this.router.events.subscribe(function (event) {
            _this3.sidebarClose();
          });
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          html.classList.add('nav-open');

          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }

          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];

          if (window.innerWidth < 991) {
            setTimeout(function () {
              mainPanel.style.position = '';
            }, 500);
          }

          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isCollapsed = !this.isCollapsed;
          var navbar = document.getElementsByTagName('nav')[0];
          console.log(navbar);

          if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
          } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/navbar/navbar.module.ts ***!
    \************************************************/

  /*! exports provided: NavbarModule */

  /***/
  function srcAppSharedNavbarNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
      return NavbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var NavbarModule = function NavbarModule() {
      _classCallCheck(this, NavbarModule);
    };

    NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
      exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })], NavbarModule);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/

  /*! exports provided: ROUTES, SidebarComponent */

  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ROUTES = [{
      path: '/dashboard',
      title: 'Mi Chequera',
      icon: 'nc-bank',
      "class": ''
    }, {
      path: '/cheques',
      title: 'Mis Cheques',
      icon: 'nc-tile-56',
      "class": ''
    }, {
      path: '/login',
      title: 'Cerrar Sesión',
      icon: 'nc-single-02',
      "class": 'active-pro'
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sidebar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html"))["default"]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/sidebar/sidebar.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sidebar/sidebar.module.ts ***!
    \*******************************************/

  /*! exports provided: SidebarModule */

  /***/
  function srcAppSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
      exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })], SidebarModule);
    /***/
  },

  /***/
  "./src/app/state-table/state-table.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/state-table/state-table.component.ts ***!
    \******************************************************/

  /*! exports provided: StateTableComponent */

  /***/
  function srcAppStateTableStateTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateTableComponent", function () {
      return StateTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StateTableComponent = function StateTableComponent() {
      _classCallCheck(this, StateTableComponent);

      this.settings = {
        actions: {
          add: false,
          edit: false,
          "delete": false
        },
        columns: {
          id: {
            title: 'Fecha'
          },
          estado: {
            title: 'Estado'
          }
        }
      };
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], StateTableComponent.prototype, "estados", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], StateTableComponent.prototype, "data", void 0);
    StateTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'state-tabla',
      template: "\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n  "
    })], StateTableComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*!
    
    =========================================================
    * Paper Dashboard Angular - v2.1.0
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/monicabayona/Documents/GitHub/david/pagaresSawtooth/cheques-blockchain/cliente/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  6:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  7:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  8:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  9:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map