(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Bienvenido</h1>\n          <p class=\"text-lead text-light\">Ingresa a tu cuenta. Si no tienes cuenta, puedes crearla!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card card-user\">\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center \">\n            <h3 class=\"card-title\"> Iniciar Sesión</h3>\n\n          </div>\n          <form role=\"form\">\n\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input [(ngModel)]=\"cedula\" class=\"form-control\" placeholder=\"Cedula\" type=\"number\" name=\"cedula\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\">\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-danger \" (click)=\"onEnviar()\" routerLinkActive=\"active\" >\n\n                Inicia Sesion\n              </button>\n\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Bienvenido</h1>\n          <p class=\"text-lead text-light\">Registrate en el siguiente formulario. Si ya tienes cuenta, puedes inicar sesion con ella!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card card-user\">\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center \">\n            <h3 class=\"card-title\"> Registro</h3>\n\n          </div>\n          <form role=\"form\">\n\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input [(ngModel)]=\"nombre\" class=\"form-control\" placeholder=\"Nombre\" type=\"text\" name=\"nombre\">\n              </div>\n            </div>\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input [(ngModel)]=\"cedula\" class=\"form-control\" placeholder=\"Cedula\" type=\"number\" name=\"cedula\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\">\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-danger \" (click)=\"onEnviar()\" routerLinkActive=\"active\" >\n\n                Registrar\n              </button>\n\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");








let AuthLayoutModule = class AuthLayoutModule {
};
AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            // NgbModule
        ],
        declarations: [
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
        ]
    })
], AuthLayoutModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");



const AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] }
];


/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transactions */ "./src/app/services/transactions.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ "./src/app/services/api.js");





let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        /** email */
        this.cedula = '';
        this.agents = [];
        /** email */
        this.nombre = '';
        this.password = '';
    }
    ngOnInit() {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["clearAuth"])();
        Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["clearPrivateKey"])();
    }
    onEnviar() {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["clearAuth"])();
        Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["clearPrivateKey"])();
        let cedula2 = this.cedula.toString();
        const credentials = {
            username: cedula2,
            password: Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["hashPassword"])(this.password)
        };
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["post"])('authorization', credentials)
            .then(res => {
            Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["setAuth"])(res.authorization);
            Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["setPrivateKey"])(this.password, res.encryptedKey);
            this.router.navigateByUrl('/dashboard');
        });
    }
    ngOnDestroy() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_payloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payloads */ "./src/app/services/payloads.js");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/transactions */ "./src/app/services/transactions.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ "./src/app/services/api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let RegisterComponent = class RegisterComponent {
    constructor(router) {
        this.router = router;
        /** email */
        this.cedula = '';
        this.agents = [];
        /** email */
        this.nombre = '';
        this.password = '';
    }
    ngOnInit() {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["clearAuth"])();
        Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["clearPrivateKey"])();
    }
    onEnviar() {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["clearAuth"])();
        Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["clearPrivateKey"])();
        Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["get"])('agents').then((agents) => {
            this.agents = agents;
            console.log(agents);
            console.log(this.agents);
        });
        const keys = Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["makePrivateKey"])(this.password);
        let state = { 'username': this.cedula.toString(), 'email': this.nombre, 'name': this.nombre };
        const user = lodash__WEBPACK_IMPORTED_MODULE_6__["assign"](keys, lodash__WEBPACK_IMPORTED_MODULE_6__["pick"](state, 'username', 'email'));
        user.password = Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["hashPassword"])(this.password);
        const agent2 = _services_payloads__WEBPACK_IMPORTED_MODULE_2__["obj"].createAgent(lodash__WEBPACK_IMPORTED_MODULE_6__["pick"](state, 'name'));
        Object(_services_transactions__WEBPACK_IMPORTED_MODULE_3__["submit"])(agent2, true, this.password).then(() => Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["post"])('users', user)).then(res => Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["setAuth"])(res.authorization)).then(this.router.navigateByUrl('/dashboard'));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module-es2015.js.map