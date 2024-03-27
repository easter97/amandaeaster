(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");









const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: '404', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'amandaeaster';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "colorblock"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".colorblock[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 500px;\n  background-color: #fedcc8;\n  z-index: -100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFYRztFQVlILGFBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXV2ZTogI2MzOWFhNTtcbiRtYXV2ZTogI2MzOWFhNTtcbiRkYXJrLXBpbms6I2RkYWVhZTtcbiRsaWdodC1waW5rOiNlZGM2YmI7XG4kYmFieTogI2ZlZGNjODtcbiRjcmVhbTojZmVmMmRjO1xuJGJhYnktYmx1ZTojOTljNmQ5O1xuJGRhcmstYmx1ZTojNDA3MjkwO1xuJHB1cnBsZTojODE3OTg1O1xuLmNvbG9yYmxvY2t7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokYmFieTtcbiAgICB6LWluZGV4OiAtMTAwO1xufSIsIi5jb2xvcmJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZGNjODtcbiAgei1pbmRleDogLTEwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
                    _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 16, vars: 0, consts: [[1, "about-card"], ["src", "../../../assets/images/IMG_2365.JPG", 1, "landscape-photo"], [1, "content"], [1, "title"], [1, "sub-content"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I grew up in Waco, TX. My father had a passion for technology that inspired me to pursue an interest in STEM. From building robots in our garage to joining my high school robotics team, engineering was always one of my favorite hobbies. I started working in Google Sites and Wordpress when I was around 15. I got my first paying clients a few years later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "When I applied to college, Computer Science was the natural choice because I loved the problem-solving challenges of coding. My passion for web development continued through college and I sought opportunities in college to get more experience in that field. I got a job at an insurance brokerage as a business analyst. After a few months at the company, an opening for a web developer became available and my boss approached me because of my resume experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The management provided an encouraging and stimulating environment in which I could further develop my skills. I learned about design, user experience, and data analytics as the website continued to grow. After a year, I was even able to hire more developers on the team and even became the head of web development at the company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "After I graduated, I accepted an offer as a front-end developer for Citibank. Although I wasn't familiar with Javascript frameworks at the time, I quickly learned that Angular was very similar to the work I had been doing before. Now, I'm proficient in Angular and use it to make sites like this one!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In my spare time I like to develop projects that I think people could use and enjoy. You can find the more successful ones posted on the projects page of this site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-card[_ngcontent-%COMP%] {\n  margin: 0 10% 0 10%;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #fef2dc;\n  border-radius: 12px 12px 0 0;\n}\n.about-card[_ngcontent-%COMP%]   .landscape-photo[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 316px;\n  margin: 10px;\n}\n.about-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Arvo\", serif;\n  font-size: 40px;\n  text-align: center;\n}\n.about-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 20px;\n  flex: 2;\n}\n.about-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 35px;\n  text-align: justify;\n}\n.sub-content[_ngcontent-%COMP%] {\n  margin: 0 10% 0 10%;\n  background-color: #fef2dc;\n  border-radius: 0 0 12px 12px;\n  padding: 15px;\n}\n.sub-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 35px;\n  text-align: justify;\n}\n@media only screen and (max-width: 600px) {\n  .about-card[_ngcontent-%COMP%] {\n    margin: 0 3% 0 3%;\n  }\n  .about-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .sub-content[_ngcontent-%COMP%] {\n    margin: 0 3% 0 3%;\n  }\n  .sub-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFSRztFQVNILDRCQUFBO0FDUEo7QURRSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ05SO0FEUUk7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ05SO0FEUUk7RUFDSSxhQUFBO0VBS0EsT0FBQTtBQ1ZSO0FETVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDSlo7QURVQTtFQUNJLG1CQUFBO0VBQ0EseUJBaENHO0VBaUNDLDRCQUFBO0VBQ0EsYUFBQTtBQ1BSO0FEU0k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDUFI7QURXQTtFQUNJO0lBQ0ksaUJBQUE7RUNSTjtFRFVVO0lBQ0ksZ0JBQUE7RUNSZDs7RURZRTtJQUNJLGlCQUFBO0VDVE47RURVTTtJQUNJLGdCQUFBO0VDUlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWF1dmU6ICNjMzlhYTU7XG4kZGFyay1waW5rOiNkZGFlYWU7XG4kbGlnaHQtcGluazojZWRjNmJiO1xuJGJhYnk6ICNmZWRjYzg7XG4kY3JlYW06I2ZlZjJkYztcbiRiYWJ5LWJsdWU6Izk5YzZkOTtcbiRkYXJrLWJsdWU6IzQwNzI5MDtcbiRwdXJwbGU6IzgxNzk4NTtcbi5hYm91dC1jYXJke1xuICAgIG1hcmdpbjowIDEwJSAwIDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjcmVhbTtcbiAgICBib3JkZXItcmFkaXVzOjEycHggMTJweCAwIDA7XG4gICAgLmxhbmRzY2FwZS1waG90b3tcbiAgICAgICAgaGVpZ2h0OjI1MHB4O1xuICAgICAgICB3aWR0aDozMTZweDtcbiAgICAgICAgbWFyZ2luOjEwcHg7XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgICAgZmxleDoyO1xuICAgIH1cbiAgIFxufVxuLnN1Yi1jb250ZW50e1xuICAgIG1hcmdpbjowIDEwJSAwIDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gICAgICAgIHBhZGRpbmc6MTVweDtcblxuICAgIHB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5hYm91dC1jYXJke1xuICAgICAgICBtYXJnaW46MCAzJSAwIDMlO1xuICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3ViLWNvbnRlbnR7XG4gICAgICAgIG1hcmdpbjowIDMlIDAgMyU7XG4gICAgICAgIHB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmFib3V0LWNhcmQge1xuICBtYXJnaW46IDAgMTAlIDAgMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYyZGM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG59XG4uYWJvdXQtY2FyZCAubGFuZHNjYXBlLXBob3RvIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDMxNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uYWJvdXQtY2FyZCAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJBcnZvXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1jYXJkIC5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleDogMjtcbn1cbi5hYm91dC1jYXJkIC5jb250ZW50IHAge1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnN1Yi1jb250ZW50IHtcbiAgbWFyZ2luOiAwIDEwJSAwIDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjJkYztcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zdWItY29udGVudCBwIHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFib3V0LWNhcmQge1xuICAgIG1hcmdpbjogMCAzJSAwIDMlO1xuICB9XG4gIC5hYm91dC1jYXJkIC5jb250ZW50IHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuc3ViLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAzJSAwIDMlO1xuICB9XG4gIC5zdWItY29udGVudCBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 40, vars: 0, consts: [["role", "navigation", 1, "desktop-header"], ["routerLink", "/home", "routerLinkActive", "is-active"], [1, "projects"], ["routerLink", "/projects", "routerLinkActive", "is-active"], [1, "fa", "fa-chevron-down"], [1, "dropdown"], ["href", "/spotify"], ["href", "https://github.com/easter97/ColorSpot"], [1, "site-title"], ["routerLink", "/about", "routerLinkActive", "is-active"], ["routerLink", "/resume", "routerLinkActive", "is-active"], ["role", "navigation", 1, "mobile-header"], [1, "links"], ["routerLink", "/home", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "orange"], ["routerLink", "/projects", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "mauve"], ["routerLink", "/about", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "blue"], ["routerLink", "/resume", "routerLinkActive", "is-active", 1, "big-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Spotify Comparison Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ColorSpot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Amanda Easter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amanda Easter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Arvo&display=swap\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\nnav.desktop-header[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  padding: 50px 0 50px 0;\n  text-align: center;\n  font-size: 16px;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 auto;\n  border-left: 2px solid #817985;\n  display: inline-block;\n  padding: 0 30px;\n  position: relative;\n  text-decoration: none;\n  text-align: center;\n  font-family: \"Arvo\", serif;\n  width: 90px;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\nnav.desktop-header[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  border-right: 2px solid #817985;\n}\nnav.desktop-header[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: inline-block;\n  padding: 0 30px;\n  position: relative;\n  text-decoration: none;\n  text-align: center;\n  font-family: \"Arvo\", serif;\n  font-size: 25px;\n}\nnav.desktop-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\nnav.desktop-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #c39aa5;\n}\nnav.desktop-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  color: #407290;\n}\nnav.desktop-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  padding-left: 0;\n  left: 0;\n  display: none;\n  background: #fedcc8;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%], nav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover {\n  visibility: visible;\n  opacity: 0.75;\n  display: block;\n  min-width: 250px;\n  text-align: left;\n  padding-top: 20px;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 20px;\n  border-style: none;\n}\nnav.desktop-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding-left: 10px;\n  border-left: 2px solid #c39aa5;\n  transition: all 0.3s ease;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #c39aa5;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n}\n.fa[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n@media only screen and (max-width: 600px) {\n  .mobile-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  nav.mobile-header[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n    color: #407290;\n  }\n  nav.desktop-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .site-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: \"Arvo\", serif;\n    font-size: 40px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVEseUVBQUE7QUFDQSxpR0FBQTtBQUNSO0VBQ0UsYUFBQTtBQ1BGO0FEVUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUk47QURVTTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDUlI7QURTUTtFQUNFLGlCQUFBO0FDUFY7QURVTTtFQUNFLCtCQUFBO0FDUlI7QURVTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNSUjtBRFdNO0VBQ0UsWUFBQTtBQ1RSO0FEWU07RUFDRSxjQXhEQTtBQzhDUjtBRFlNO0VBQ0ksY0FyREM7QUMyQ1g7QURhTTtFQUNFLGVBQUE7QUNYUjtBRGNNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDTixlQUFBO0VBQ00sT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkF0RUQ7QUMwRFA7QURlTTs7RUFFRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDYlI7QURpQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEa0JNO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDaEJSO0FEcUJFO0VBRUkscUJBQUE7QUNuQk47QURxQk07RUFDSSxjQTVHRjtBQ3lGUjtBRHdCRztFQUFnQix5QkFBQTtBQ3BCbkI7QURzQkU7RUFDSSxpQkFBQTtBQ25CTjtBRHFCRTtFQUNFO0lBQ0UsY0FBQTtFQ2xCSjs7RURzQk07SUFDRSxjQXZIQztFQ29HVDtFRHNCSTtJQUNFLGFBQUE7RUNwQk47O0VEdUJFO0lBTUUsa0JBQUE7SUFDQSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ3pCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1hdXZlOiAjYzM5YWE1O1xuJGRhcmstcGluazojZGRhZWFlO1xuJGxpZ2h0LXBpbms6I2VkYzZiYjtcbiRiYWJ5OiAjZmVkY2M4O1xuJGNyZWFtOiNmZWYyZGM7XG4kYmFieS1ibHVlOiM5OWM2ZDk7XG4kZGFyay1ibHVlOiM0MDcyOTA7XG4kcHVycGxlOiM4MTc5ODU7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcnZvJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcbi5tb2JpbGUtaGVhZGVye1xuICBkaXNwbGF5Om5vbmU7XG59XG5uYXYge1xuICAgICYuZGVza3RvcC1oZWFkZXIge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbiAgICAgIHBhZGRpbmc6IDUwcHggMCA1MHB4IDA7ICBcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgXG4gICAgICB1bCBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRwdXJwbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ0Fydm8nLCBzZXJpZjtcbiAgICAgICAgd2lkdGg6OTBweDtcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnByb2plY3Rze1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkcHVycGxlO1xuICAgICAgfVxuICAgICAgLnNpdGUtdGl0bGV7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgfVxuICBcbiAgICAgIGxpIGEge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gIFxuICAgICAgbGkgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkbWF1dmU7XG4gICAgICB9XG4gICAgICBsaSBhLmlzLWFjdGl2ZXtcbiAgICAgICAgICBjb2xvcjokZGFyay1ibHVlO1xuICAgICAgfVxuICBcbiAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICBcbiAgICAgIHVsIGxpIHVsIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhYnk7XG4gICAgICB9XG4gIFxuICAgICAgdWwgbGk6aG92ZXIgPiB1bCxcbiAgICAgIHVsIGxpIHVsOmhvdmVyIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogLjc1O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggI2NjYztcbiAgICAgIH1cbiAgXG4gICAgICB1bCBsaSB1bCBsaSB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgfVxuICBcbiAgICAgIHVsIGxpIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1hdXZlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgYSB7XG4gIFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkbWF1dmU7XG4gICAgICB9XG4gICBcbiAgfVxuICBcbiAgIHVsIGxpIHVsIGxpIGEgeyB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlOyB9XG4gIFxuICAuZmF7XG4gICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubW9iaWxlLWhlYWRlcntcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxuICAgIG5hdntcbiAgICAgICYubW9iaWxlLWhlYWRlcntcbiAgICAgICAgLmlzLWFjdGl2ZXtcbiAgICAgICAgICBjb2xvcjokZGFyay1ibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmRlc2t0b3AtaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2l0ZS10aXRsZXtcbiAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgLy8gcGFkZGluZzogMCAzMHB4O1xuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XG4gICAgICBmb250LXNpemU6NDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJ2byZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG4ubW9iaWxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbm5hdi5kZXNrdG9wLWhlYWRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5uYXYuZGVza3RvcC1oZWFkZXIgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjODE3OTg1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQXJ2b1wiLCBzZXJpZjtcbiAgd2lkdGg6IDkwcHg7XG59XG5uYXYuZGVza3RvcC1oZWFkZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbm5hdi5kZXNrdG9wLWhlYWRlciAucHJvamVjdHMge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjODE3OTg1O1xufVxubmF2LmRlc2t0b3AtaGVhZGVyIC5zaXRlLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJBcnZvXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5uYXYuZGVza3RvcC1oZWFkZXIgbGkgYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbm5hdi5kZXNrdG9wLWhlYWRlciBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNjMzlhYTU7XG59XG5uYXYuZGVza3RvcC1oZWFkZXIgbGkgYS5pcy1hY3RpdmUge1xuICBjb2xvcjogIzQwNzI5MDtcbn1cbm5hdi5kZXNrdG9wLWhlYWRlciBsaTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdi5kZXNrdG9wLWhlYWRlciB1bCBsaSB1bCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZWRjYzg7XG59XG5uYXYuZGVza3RvcC1oZWFkZXIgdWwgbGk6aG92ZXIgPiB1bCxcbm5hdi5kZXNrdG9wLWhlYWRlciB1bCBsaSB1bDpob3ZlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbm5hdi5kZXNrdG9wLWhlYWRlciB1bCBsaSB1bCBsaSB7XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxubmF2LmRlc2t0b3AtaGVhZGVyIHVsIGxpIHVsIGxpIGE6aG92ZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2MzOWFhNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2MzOWFhNTtcbn1cblxudWwgbGkgdWwgbGkgYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIG5hdi5tb2JpbGUtaGVhZGVyIC5pcy1hY3RpdmUge1xuICAgIGNvbG9yOiAjNDA3MjkwO1xuICB9XG4gIG5hdi5kZXNrdG9wLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zaXRlLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJ2b1wiLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 0, consts: [[1, "container"], ["src", "../../../assets/images/Computer Headshot (2).jpeg", 1, "photo"], ["src", "../../../assets/images/IMG_0043.JPG", 1, "photo"], [1, "desc"], [1, "site-desc"], [1, "links"], ["routerLink", "/projects", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "mauve"], ["routerLink", "/about", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "blue"], ["routerLink", "/resume", "routerLinkActive", "is-active", 1, "big-link"], [1, "streak", "orange"], [1, "about-me"], ["src", "../../../assets/images/IMG_0022.JPG", 1, "photo"], ["routerLink", "/about", 1, "about-button"], [1, "connect"], [1, "socials"], ["href", "https://www.linkedin.com/in/amanda-easter-b0656a103/", "target", "_blank", "title", "LinkedIn", 1, "orb", "linked"], ["href", "https://github.com/easter97", "target", "_blank", "title", "GitHub", 1, "orb", "git"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hi there.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Thanks for stopping by.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Let's get to know each other.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This site is home to my portfolio of work and information about me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Take a look around to learn more about me, what I do, and projects that I've been working on.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hi, I'm Amanda Easter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Front-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "I've been developing web sites since I was in high school. I started with Wordpress and worked my way up to working in Javascript, HTML, and CSS. Now, I am an Angular developer and use my spare time to make sites like this one!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "More About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Going so soon?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Let's stay in touch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.photo[_ngcontent-%COMP%] {\n  height: 400px;\n  margin: 10px;\n}\n\n.desc[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 20px;\n  font-size: 35px;\n  text-align: center;\n}\n\n.desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  margin: 10px;\n}\n\n.site-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px;\n}\n\n.about-me[_ngcontent-%COMP%] {\n  background-color: #fef2dc;\n  text-align: center;\n  padding: 50px;\n}\n\n.about-me[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.about-me[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n.about-me[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.about-me[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n\n.links[_ngcontent-%COMP%] {\n  margin: 45px;\n}\n\n.about-button[_ngcontent-%COMP%] {\n  background-color: black;\n  color: #fef2dc;\n  font-size: 25px;\n  text-decoration: none;\n  padding: 10px 20px 10px 20px;\n}\n\n.about-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #407290;\n}\n\n.socials[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.orb[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 60px;\n  height: 60px;\n  background-size: contain;\n  background-clip: border-box;\n  margin: 20px;\n  transition: all 0.2s ease-in-out;\n}\n\n.orb.linked[_ngcontent-%COMP%] {\n  background-image: url('linkedin.png');\n}\n\n.orb.git[_ngcontent-%COMP%] {\n  background-color: white;\n  background-image: url('git.png');\n}\n\n.orb[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.25, 1.25);\n}\n\n@media only screen and (max-width: 600px) {\n  .about-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0YsdUJBQUE7RUFDQSxlQUFBO0FDUkY7O0FEVUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ1BKOztBRFNBO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURTSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDUEo7O0FEU0E7RUFDSSx5QkFoQ0c7RUFpQ0gsa0JBQUE7RUFDQSxhQUFBO0FDTko7O0FET0k7RUFDSSxZQUFBO0FDTFI7O0FETVE7RUFDSSxlQUFBO0FDSlo7O0FETVE7RUFDSSxTQUFBO0FDSlo7O0FETVE7RUFFSSxpQkFBQTtBQ0xaOztBRFNBO0VBQ0ksWUFBQTtBQ05KOztBRFFBO0VBQ0ksdUJBQUE7RUFDQSxjQXRERztFQXVESCxlQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ0xKOztBRE1JO0VBQ0ksZUFBQTtFQUNBLHlCQTFERztBQ3NEWDs7QURPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDSEo7O0FESUk7RUFDSSxxQ0FBQTtBQ0ZSOztBRElJO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtBQ0ZSOztBRElJO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0FDRlI7O0FES0E7RUFDSTtJQUNJLGVBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWF1dmU6ICNjMzlhYTU7XG4kZGFyay1waW5rOiNkZGFlYWU7XG4kbGlnaHQtcGluazojZWRjNmJiO1xuJGJhYnk6ICNmZWRjYzg7XG4kY3JlYW06I2ZlZjJkYztcbiRiYWJ5LWJsdWU6Izk5YzZkOTtcbiRkYXJrLWJsdWU6IzQwNzI5MDtcbiRwdXJwbGU6IzgxNzk4NTtcblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucGhvdG97XG4gICAgaGVpZ2h0OjQwMHB4O1xuICAgIG1hcmdpbjoxMHB4O1xufVxuLmRlc2N7XG4gICAgLy8gaGVpZ2h0OjQwMHB4O1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBmb250LXNpemU6MzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgaDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW46MTBweDtcbiAgICB9XG59XG4uc2l0ZS1kZXNje1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjUwcHg7XG59XG4uYWJvdXQtbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNyZWFtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjUwcHg7XG4gICAgLmRlc2N7XG4gICAgICAgIHdpZHRoOjYwMHB4O1xuICAgICAgICBoMXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgfVxuICAgICAgICBoNntcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjM1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGlua3N7XG4gICAgbWFyZ2luOjQ1cHg7XG59XG4uYWJvdXQtYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiRjcmVhbTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6MTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XG4gICAgfVxufVxuLnNvY2lhbHN7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcmJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46MjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAmLmxpbmtlZHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGlua2VkaW4ucG5nKTtcbiAgICB9XG4gICAgJi5naXR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXQucG5nKTtcbiAgICB9XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUsIDEuMjUpO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYWJvdXQtYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBob3RvIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZGVzYyB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzYyBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zaXRlLWRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5hYm91dC1tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYyZGM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbn1cbi5hYm91dC1tZSAuZGVzYyB7XG4gIHdpZHRoOiA2MDBweDtcbn1cbi5hYm91dC1tZSAuZGVzYyBoMSB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbn1cbi5hYm91dC1tZSAuZGVzYyBoNiB7XG4gIG1hcmdpbjogMDtcbn1cbi5hYm91dC1tZSAuZGVzYyBwIHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5saW5rcyB7XG4gIG1hcmdpbjogNDVweDtcbn1cblxuLmFib3V0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZlZjJkYztcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG59XG4uYWJvdXQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3MjkwO1xufVxuXG4uc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JiIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ub3JiLmxpbmtlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLnBuZyk7XG59XG4ub3JiLmdpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9naXQucG5nKTtcbn1cbi5vcmI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMS4yNSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFib3V0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 27, vars: 0, consts: [[1, "container"], ["viewBox", "0 0 500 500", 1, "milk-404"], ["id", "milk-spill", "fill", "#fff"], ["id", "milk-spill--large", "d", "M132.6 317.5c-1.9.5-3.6 1.3-5.2 2.3-7.3 5-1.4 10.3.7 15.8 7.5 19.6-40.9 16.6-46.8 33.5-2.4 6.8-.4 14.6 5.1 20.1 4.8 4.8 11.8 7.6 18.9 9.7 32.8 9.5 72.4 9.2 106.9 10.5 41 1.5 82.3 2.2 123.3 1 6.7-.2 13.6-.5 19.9-2.6 6.3-2.1 11.9-6.4 13.1-11.8 3.1-13.3-19.4-24.5-14.8-37.5 3.8-10.8 20.1-11.6 30.6-15.3 6.4-2.3 12.6-5.7 15.6-10.9 16.9-28.4-57.7-30.5-74.8-30.3-30.2.3-59.9 5.2-89.9 7.1-32.5 2.1-66 1.4-97.8 7.4-1.6.2-3.2.5-4.8 1"], ["id", "milk-spill--right", "d", "M435.6 465.7c4.7 1.5 10.5 1.6 15.9 1.7 3.2 0 6.4.1 9.6.1 4.4.1 9.2 0 12.6-1.5 1.2-.6 2.2-1.4 2.3-2.2.2-2-3.9-3.2-7.5-3.4-9.3-.7-15.7-4.4-25.6-2.8-6.3.9-16.7 5.1-7.3 8.1"], ["id", "milk-spill--left", "d", "M73.8 321.1c-2.7.4-5.5 1-7.6 2.8-2 1.8-2.9 5.2-1.2 7.3 1.2 1.4 3.1 1.9 4.9 2.3 9.7 1.9 19.6 2.8 29.5 2.7 3 0 6.1-.2 8.8-1.6 5.8-3 0-5.2-2.6-6.8-2.6-1.6-2.9-4.3-4.9-6.2-2.7-2.6-7.7-1.7-11.2-1.6-5.2 0-10.5.3-15.7 1.1"], ["id", "milk-container"], ["fill", "#f1fbfe", "d", "M272.4 473.6V168.4l151.7-16.7v302.6z"], ["fill", "#c2e8f8", "d", "M211.6 131.5l60.8 36.9v305.2l-60.8-42.5zm177.8-51.2l-177.8 51.2L242 92.9z"], ["fill", "#f0f9fc", "d", "M388.2 56.2c-.5-9.5-8.7-16.8-18.2-16.2l-112 7.4c-9 .6-16 8.1-16 17.1v28.4l147.5-12.5-1.3-24.2z"], ["fill", "#b1dfef", "d", "M315.6 97.7l-104 33.8 60.8 36.9z"], ["fill", "#e4f5f9", "d", "M272.4 168.4L242 92.9l147.4-12.6 34.7 71.4z"], ["fill", "#5f4b8b", "d", "M334.4 306.1c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.7.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.7 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.8-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.8 0 1.5 0 2.3.1v6.5l2.9-.3zm18.7-28.4c2.5-.3 4.6 0 6.4.8 1.8.8 3.3 2 4.4 3.7 1.2 1.6 2 3.6 2.6 6 .5 2.3.8 4.9.8 7.7s-.3 5.4-.9 7.9c-.6 2.4-1.5 4.6-2.6 6.5-1.2 1.9-2.7 3.4-4.5 4.6-1.8 1.2-4 1.9-6.4 2.2-2.5.3-4.6 0-6.4-.8-1.8-.8-3.3-2-4.4-3.6-1.2-1.6-2-3.6-2.6-5.9-.6-2.3-.9-4.9-.9-7.7s.3-5.4.9-7.9c.6-2.5 1.5-4.7 2.6-6.6 1.2-1.9 2.7-3.5 4.5-4.7s4-1.9 6.5-2.2m-.2 8.8c-1.5.2-2.6 1.2-3.4 3.1-.8 1.9-1.2 4.7-1.2 8.4 0 3.6.4 6.3 1.2 8 .8 1.7 1.9 2.5 3.4 2.4 1.4-.2 2.5-1.2 3.3-3.1.8-1.9 1.2-4.7 1.2-8.3 0-3.7-.4-6.3-1.2-8.1-.8-1.8-1.9-2.6-3.3-2.4m47.7 12c.3 1.5.5 2.9.5 4.3s-.2 2.8-.5 4.4l-2.9.3v6.9c-.8.3-1.5.5-2.3.6-.8.1-1.5.3-2.2.3-.7.1-1.5.1-2.2.2-.8 0-1.5 0-2.3-.1v-6.9l-17.5 2-.9-1.6 14.8-35.3c1.4 0 2.8.2 4.2.5 1.4.3 2.7.9 4 1.8l-10 24.5 5.4-.6v-6.5c.8-.3 1.6-.5 2.3-.6.7-.1 1.5-.3 2.2-.3.7-.1 1.4-.1 2.2-.2.7 0 1.5 0 2.3.1v6.5l2.9-.3zM305.7 336c.7-.2 1.7-.4 3-.7 1.4-.3 3.1-.6 5.1-.8 1.5-.2 3.1-.2 4.6-.1s2.9.5 4.2 1.2c1.2.7 2.3 1.8 3 3.2.8 1.4 1.2 3.4 1.2 5.8 0 2.2-.3 4-.9 5.5-.6 1.5-1.4 2.7-2.4 3.7s-2.2 1.7-3.5 2.2c-1.3.5-2.6.8-4 1-.5.1-1.1.1-1.7.1h-1.2v10.6c-.7.2-1.4.4-2 .6-.6.1-1.2.2-1.7.3-1 .1-2.2.1-3.7 0V336zm7.4 14.5c.1 0 .4.1.7.1.3 0 .7 0 1.1-.1 1.2-.1 2.2-.6 3-1.5.8-.8 1.2-2 1.2-3.6 0-.9-.1-1.7-.4-2.3-.2-.6-.6-1.1-1-1.4-.4-.3-.9-.5-1.5-.6-.6-.1-1.2-.1-1.8 0-.2 0-.4 0-.6.1-.2 0-.5.1-.7.1v9.2zm19.8 15c-.7.2-1.3.4-1.8.5-.5.1-1.1.2-1.6.3-.5.1-1.1.1-1.8.1s-1.4 0-2.3-.1l9.6-33.7c.7-.2 1.4-.3 2.1-.5.6-.1 1.3-.2 2-.3.5-.1 1.1-.1 1.8-.1h2.2l9.5 31.5c-1.6.5-3.1.8-4.3.9-.6.1-1.1.1-1.7.1-.6 0-1.2 0-1.8-.1l-1.6-6.2c-.8.3-1.6.6-2.3.8-.7.2-1.5.3-2.2.4-.7.1-1.3.1-2 .1s-1.4-.1-2.2-.2l-1.6 6.5zm6-24.8l-2.9 12.1c.5.1.9.2 1.4.2h1.3c.5-.1 1-.1 1.4-.3.5-.1 1-.3 1.5-.5l-2.7-11.5zm31.5 2.8c.8-.2 1.5-.4 2.1-.5.6-.1 1.2-.2 1.7-.3.5-.1 1.1-.1 1.8-.1h2v16.6c-1.7.9-3.4 1.5-5 1.9-1.6.4-3.1.7-4.2.8-2.5.3-4.7.1-6.6-.5-1.9-.6-3.5-1.6-4.7-2.9-1.3-1.3-2.2-3-2.9-5-.6-2-.9-4.2-.9-6.6s.3-4.7 1-6.9 1.6-4.1 2.9-5.7c1.2-1.7 2.8-3 4.6-4.1 1.8-1.1 3.9-1.7 6.2-2 1.4-.2 2.7-.2 3.9-.1 1.2.1 2.6.4 4.1.9-.1 1.3-.3 2.5-.6 3.7-.4 1.2-.8 2.3-1.2 3.1-.6-.1-1.1-.3-1.6-.4-.5-.1-.9-.2-1.4-.2-.4 0-.9-.1-1.3-.1s-.9 0-1.4.1c-2.3.3-4.1 1.3-5.4 3.1-1.3 1.8-1.9 4.3-1.9 7.6s.6 5.6 1.8 7.1c1.2 1.5 3.1 2 5.5 1.8l1.5-.3v-11zm28.6-2.6c0 1.1-.1 2.3-.4 3.6l-8.3.9v6.5l10.8-1.2c.3 1.3.4 2.4.4 3.4 0 1.1-.1 2.3-.4 3.6l-18.4 2.1V327l18.1-2.1c.1.7.2 1.3.3 1.8.1.6.1 1.1.1 1.6 0 1-.1 2.2-.3 3.6l-10.5 1.2v5l8.3-.9c.1 1.5.3 2.7.3 3.7m-93.4 32.8c.8-.2 1.5-.4 2.1-.6.6-.1 1.3-.3 1.9-.3.6-.1 1.3-.1 2-.1s1.3.1 1.8.1l12.4 20.8v-22.2c.9-.3 1.8-.5 2.5-.6.7-.2 1.4-.3 2-.3.6-.1 1.2-.1 1.9-.1s1.4 0 2.1.1l-.1 40.4c-.4.2-.9.3-1.5.5-.7.2-1.4.3-2.2.4-.9.1-1.7.1-2.4.1s-1.2-.1-1.5-.1l-12.4-20.7v22.1c-1.6.5-3 .9-4.3 1-1.3.1-2.7.1-4.3 0v-40.5zm34.1 16.5c0-3 .3-5.9 1-8.5.7-2.7 1.7-5 3-7.1 1.4-2 3.1-3.7 5.2-5 2.1-1.3 4.6-2.1 7.5-2.5 2.9-.3 5.4-.1 7.5.8 2.1.8 3.8 2.1 5.2 3.8 1.4 1.7 2.4 3.9 3 6.4.7 2.5 1 5.3 1 8.3 0 3-.3 5.8-1 8.5-.7 2.6-1.7 4.9-3 7-1.4 2-3.1 3.7-5.2 5-2.1 1.3-4.6 2.1-7.5 2.4-2.9.3-5.4.1-7.5-.7-2.1-.8-3.9-2-5.2-3.8-1.4-1.7-2.4-3.8-3-6.3-.7-2.5-1-5.3-1-8.3m23.6-2.7c0-8.2-2.3-12.1-6.8-11.6-4.6.5-6.9 4.9-6.9 13.1 0 4.1.6 7.1 1.7 9 1.1 1.9 2.9 2.7 5.2 2.4 4.5-.4 6.8-4.7 6.8-12.9m20.7-14l-8.9 1c-.3-1.6-.5-3.1-.5-4.4 0-1.2.2-2.7.5-4.4l27.2-3.1c.1.8.2 1.6.3 2.3.1.7.1 1.4.1 2 0 1.2-.1 2.8-.4 4.5l-8.9 1v31.7c-1.9.6-3.4.9-4.7 1-1.3.1-2.9.2-4.7 0v-31.6zM305.6 420l13-1.5c.1.5.1.9.2 1.3 0 .4.1.8.1 1.2 0 .7-.1 1.6-.2 2.6l-7.5.9v4l5.9-.7c.2 1 .3 1.8.3 2.5s-.1 1.6-.3 2.6l-5.9.7v9.2c-1.1.3-2 .5-2.7.6-.8.1-1.7.1-2.7 0V420zm14.4 10.2c0-1.7.2-3.4.6-4.9.4-1.5 1-2.9 1.7-4.1.8-1.2 1.8-2.1 3-2.9 1.2-.8 2.7-1.2 4.3-1.4 1.7-.2 3.1 0 4.3.4 1.2.5 2.2 1.2 3 2.2.8 1 1.4 2.2 1.8 3.7.4 1.4.6 3 .6 4.8s-.2 3.4-.6 4.9c-.4 1.5-1 2.8-1.8 4-.8 1.2-1.8 2.1-3 2.9-1.2.7-2.6 1.2-4.3 1.4-1.7.2-3.1.1-4.3-.4-1.2-.5-2.2-1.2-3-2.2-.8-1-1.4-2.2-1.7-3.6-.4-1.5-.6-3.1-.6-4.8m13.6-1.6c0-4.7-1.3-7-3.9-6.7-2.7.3-4 2.8-4 7.6 0 2.4.3 4.1 1 5.2.6 1.1 1.6 1.6 3 1.4 2.6-.3 3.9-2.8 3.9-7.5m17.2 10.1c-1.7.2-3 .1-4.1-.2-1.1-.4-2-.9-2.6-1.8-.6-.8-1.1-1.9-1.3-3.1-.3-1.3-.4-2.7-.4-4.3V416c.6-.2 1.1-.3 1.5-.4s.8-.1 1.2-.2c.3 0 .7-.1 1.2-.1h1.5v12.6c0 1.1 0 2 .1 2.8.1.8.2 1.4.4 1.8.2.5.5.8.9.9.4.2.9.2 1.5.1s1.2-.2 1.5-.5c.4-.3.7-.6.9-1.1.2-.5.4-1.1.4-1.9.1-.8.1-1.7.1-2.8v-12.6c.6-.2 1.1-.3 1.5-.4.4-.1.8-.1 1.2-.2.4 0 .8-.1 1.2-.1h1.5v13.3c0 1.6-.1 3.1-.4 4.4-.3 1.3-.7 2.5-1.3 3.4-.6 1-1.5 1.8-2.6 2.4-.9.7-2.3 1.1-3.9 1.3m12-25.1c.5-.1.9-.3 1.2-.3.4-.1.7-.1 1.1-.2.4 0 .8-.1 1.2-.1.4 0 .7 0 1 .1l7.1 12v-12.8c.5-.1 1-.3 1.4-.4.4-.1.8-.2 1.2-.2.3 0 .7-.1 1.1-.1.4 0 .8 0 1.2.1V435c-.2.1-.5.2-.9.3-.4.1-.8.2-1.3.2-.5.1-1 .1-1.4 0-.4 0-.7-.1-.9-.1l-7.2-11.9v12.7c-.9.3-1.7.5-2.5.6s-1.6.1-2.5 0v-23.2zm26.3-3.5c3.9-.4 6.8.2 8.8 2.1 2 1.8 3 4.8 3 8.8 0 4.1-1 7.3-3.1 9.4-2 2.2-5.1 3.5-9.1 3.9-1 .1-2 .2-3 .2h-2.8v-23.3c.3-.1.7-.2 1.2-.3l1.5-.3c.6-.1 1.1-.2 1.7-.3.7 0 1.2-.1 1.8-.2m-.7 19.2h.5c.2 0 .4 0 .6-.1.8-.1 1.5-.3 2.3-.6s1.3-.7 1.8-1.3c.5-.6.9-1.3 1.2-2.3.3-.9.4-2.1.4-3.5s-.2-2.5-.5-3.4c-.3-.9-.7-1.6-1.2-2-.5-.5-1.1-.8-1.8-.9-.7-.1-1.4-.2-2.1-.1-.4 0-.7.1-.9.1-.2 0-.3 0-.4.1v14zm15.7-164.6l-102.3 11.7v-94.1l102.3-11.7z"], ["fill", "#7367a4", "d", "M216.7 182.1l.6.3c.2.1.4.3.6.4.2.1.4.3.6.5.2.2.4.3.6.5l2 7.4 2.1-4.7.6.3.6.3c.2.1.4.3.6.4.2.2.4.3.6.5l.5 11.9c-.2-.1-.3-.1-.5-.2s-.4-.2-.7-.4c-.3-.2-.7-.5-1.2-.9l-.2-6.9-1.6 3.4c-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.3-.1-.1-.3-.2-.4-.3-.2-.1-.3-.2-.5-.4l-1.4-5.3-.2 6.6c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9l.5-11.3zm12.4 20c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.3.6.4.2.2.4.3.7.6v11.6c-.6-.3-1-.5-1.3-.7m6.9-2.7c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2l-1.5-1.5c0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9.2.3.4.5.6.8l1 1zm7.7 5.1c.4.4.8.9 1.1 1.3.3.4.6.8.8 1.2.2.4.4.9.5 1.3.1.5.2.9.2 1.5s-.1 1-.3 1.4c-.2.3-.4.6-.8.7-.3.1-.8.1-1.3-.1s-1.1-.4-1.7-.9c-.6-.4-1.1-.8-1.6-1.2-.5-.4-.9-.9-1.5-1.5 0-.4.1-.7.2-1.1.1-.4.2-.7.3-1.1.9 1 1.6 1.7 2.3 2.2.5.3.9.5 1.1.5.3 0 .4-.2.4-.6 0-.2 0-.3-.1-.5s-.1-.3-.2-.5c-.1-.1-.2-.3-.3-.4-.1-.1-.2-.3-.4-.4l-.8-.9c-.3-.4-.7-.7-.9-1.1-.3-.4-.5-.8-.7-1.2-.2-.4-.4-.8-.5-1.2-.1-.4-.2-.9-.2-1.3 0-.6.1-1 .3-1.4.2-.3.4-.5.7-.7.3-.1.7-.1 1.1 0 .4.1.9.4 1.5.7.5.3.9.7 1.4 1.1l1.4 1.4c0 .3-.1.7-.2 1-.1.4-.2.7-.4.9-.2-.3-.5-.6-.9-1-.3-.4-.7-.7-1.2-1-.2-.1-.3-.2-.4-.2-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.1.1-.1.2-.1.4 0 .3.1.6.3.9s.4.5.6.8l1 1zm5.3 10.8c-.3-.2-.8-.6-1.3-1v-11.6c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.3.7.6V216c-.6-.3-1-.5-1.3-.7m2.9-9.8l.6.3c.2.1.3.2.5.3.2.1.3.2.5.4s.3.3.5.4l3.3 8.6v-6.4c.2.1.5.2.7.3.2.1.4.2.5.3.2.1.3.2.5.4.2.1.4.3.6.5v11.6c-.1 0-.2-.1-.4-.2l-.6-.3c-.2-.2-.4-.3-.6-.5l-.4-.4-3.3-8.5v6.3c-.4-.2-.8-.4-1.1-.6-.3-.2-.7-.5-1.1-.9v-11.6zm14.7 15.1c.3.1.5.2.7.4l.6.3c.2.1.4.2.6.4.2.2.4.4.7.5v5.9c-.6-.1-1.1-.3-1.7-.6-.5-.3-1-.6-1.4-.8-.8-.6-1.6-1.2-2.2-1.9-.6-.7-1.1-1.5-1.6-2.3-.4-.8-.7-1.7-.9-2.5-.2-.9-.3-1.7-.3-2.6 0-.9.1-1.6.3-2.2.2-.6.5-1 .9-1.3.4-.3.9-.4 1.5-.3s1.3.4 2.1.9c.5.3.9.6 1.3 1 .4.3.9.8 1.4 1.4 0 .4-.1.8-.2 1.2-.1.3-.3.6-.4.8l-.5-.5-.4-.4c-.1-.1-.3-.2-.4-.4-.1-.1-.3-.2-.5-.3-.8-.5-1.4-.6-1.8-.3-.4.3-.6 1.1-.6 2.2 0 1.2.2 2.2.6 3 .4.8 1 1.5 1.8 2.1.2.1.3.2.5.3v-4zm-50.4 127c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v17.3l6.2 4.1c.1.6.1 1.1.2 1.5v2.2c0 .4-.1.8-.2 1.3l-11-7.3v-22.3zm15.7 32.8c-.7-.4-1.5-1.1-2.4-1.9v-22.1c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.5-1.8-.9-2.4-1.3m5.6-18.7c.4.2.8.4 1.1.5l.9.6c.3.2.7.5 1 .8.4.3.7.5.9.8l6.3 16.3v-12.1c.5.2.9.4 1.3.7.4.2.7.4 1 .6.3.2.6.4 1 .7.3.3.7.6 1.1.9v22.1c-.2-.1-.4-.2-.8-.3-.3-.2-.7-.4-1.1-.6-.5-.3-.9-.6-1.2-.9-.4-.3-.6-.5-.8-.7l-6.3-16.3v12.1c-.8-.3-1.5-.7-2.2-1.2-.6-.4-1.4-1-2.2-1.7v-22.3zm17.8 11.8c.5.2.9.5 1.3.7.4.2.7.4 1.1.6.3.2.7.5 1.1.8.4.3.8.7 1.3 1.1v22.1c-1-.4-1.7-.9-2.4-1.3s-1.5-1.1-2.4-1.9v-22.1zm10.4 17.6l5.1 14.8c-.3-.1-.7-.3-1.2-.6s-1-.6-1.4-.8c-.5-.3-1-.7-1.5-1.1-.5-.4-.9-.7-1.2-1l-4.9-14.4 4.6-7.9c.5.3 1 .5 1.4.7.4.2.8.5 1.2.8.2.1.4.3.7.5s.5.4.7.6c.2.2.5.4.7.6.2.2.4.3.6.5l-4.8 7.3zm-22.6-84.4l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.3-8.6 4.1m-.9-28.2c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6zm.9-7.9l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1 1.2.8 2.1 2.5 2.1 3.9s-1 1.8-2.1 1c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v12.9c.1 5.4-3.7 7.2-8.5 4.1"], ["fill", "#7367a4", "d", "M242.7 285.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.4-.9 1.8-2.1 1m.4 57.8l-.9-.6c-4.7-3.1-8.6-10.1-8.6-15.6v-12.9c0-5.4 3.9-7.3 8.6-4.1l.9.6c4.7 3.1 8.6 10.1 8.6 15.6v12.9c0 5.4-3.8 7.2-8.6 4.1m-.9-28.3c-2.4-1.6-4.3-.6-4.3 2.1v12.9c0 2.7 1.9 6.2 4.3 7.8l.9.6c2.4 1.6 4.3.6 4.3-2.1v-12.9c0-2.7-1.9-6.2-4.3-7.8l-.9-.6z"], ["fill", "#7367a4", "d", "M242.7 322.9c-1.2-.8-2.1-2.5-2.1-3.9v-20.2c0-1.4 1-1.8 2.1-1 1.2.8 2.1 2.5 2.1 3.9v20.2c0 1.3-.9 1.7-2.1 1"], ["fill", "#7367a4", "d", "M269.5 373.7l-53.6-35.6V206.4l53.6 35.6v131.7zm-49.6-37.6l45.5 30.2V243.9l-45.5-30.2v122.4zm-3.6-174.9v8.2l50.3 29.1v-8.4zm0 222.7v8.2l50.3 29.1v-8.4z"], ["id", "web-page"], ["fill", "#fff", "d", "M399.1 259.1l-92.3 10.6V188l92.3-10.5v19.6z"], ["fill", "#aa9dce", "d", "M399.1 184.8l-92.3 10.5V188l92.3-10.5v1.5z"], ["fill", "#fff", "d", "M312.9 191.5c0 .8-.6 1.5-1.4 1.6s-1.4-.5-1.4-1.3.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3m5.6-.6c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.4 1.4 1.3m5.7-.7c0 .8-.6 1.5-1.4 1.6-.8.1-1.4-.5-1.4-1.3s.6-1.5 1.4-1.6c.8-.1 1.4.5 1.4 1.3"], ["id", "milk-face"], ["id", "mouth", "fill", "none", "stroke", "#4f3e7c", "stroke-linecap", "round", "stroke-miterlimit", "10", "stroke-width", "4", "d", "M338.4 239.8l32-3.9"], ["id", "mouth-frown", "fill", "none", "stroke", "#4f3e7c", "stroke-linecap", "round", "stroke-miterlimit", "10", "stroke-width", "4", "d", "M368.4 240.8s-15.4-10.5-27.3 3.5"], ["id", "eyes"], ["id", "eye-right-open", "cx", "375.3", "cy", "215.6", "r", "5", "fill", "#4f3e7c"], ["id", "eye-left-open", "cx", "330.9", "cy", "220", "r", "5", "fill", "#4f3e7c"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "circle", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #fedcc8;\n}\n\n.milk-404[_ngcontent-%COMP%] {\n  max-height: 100vh;\n}\n\n#mouth-frown[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\na[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 0.8em;\n  padding: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #fedcc8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7O0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1JGOztBRFdBO0VBQ0UseUJBZks7QUNPUDs7QURXQTtFQUNFLGlCQUFBO0FDUkY7O0FEV0E7RUFDRSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNSRjs7QURVQTtFQUNJLHlCQWhDRztBQ3lCUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXV2ZTogI2MzOWFhNTtcbiRkYXJrLXBpbms6I2RkYWVhZTtcbiRsaWdodC1waW5rOiNlZGM2YmI7XG4kYmFieTogI2ZlZGNjODtcbiRjcmVhbTojZmVmMmRjO1xuJGJhYnktYmx1ZTojOTljNmQ5O1xuJGRhcmstYmx1ZTojNDA3MjkwO1xuJHB1cnBsZTojODE3OTg1O1xuXG5ib2R5LFxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWJ5XG59XG5cbi5taWxrLTQwNCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jbW91dGgtZnJvd257XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IC44ZW07XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWJ5O1xufSIsImJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZGNjODtcbn1cblxuLm1pbGstNDA0IHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbiNtb3V0aC1mcm93biB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuYSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZGNjODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 26, vars: 0, consts: [[1, "project-list"], [1, "project"], ["src", "../../../assets/images/spotify.png", 1, "project-icon"], [1, "project-content"], [1, "project-title"], [1, "description"], ["href", "/spotify", 1, "project-link"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], ["href", "https://github.com/easter97/spotify-comparison", 1, "project-link"], ["src", "../../../assets/images/ColorSpot Logo.png", 1, "project-icon"], [1, "collaborative"], ["href", "https://github.com/easter97/ColorSpot", 1, "project-link"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Spotify Comparison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This Angular app is designed to allow Spotify users to compare their playlist with another Spotify user's to determine how similar the music tastes are. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Project Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ColorSpot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "collaborative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This application is designed to assist users that suffer from color blindness by providing a tool for color identification on macOS. Users can hover their mouse on the screen and a color is determined from a range of RGB values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".project[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 50px 10% 50px 10%;\n  background-color: #fef2dc;\n  padding: 35px;\n  border-radius: 12px;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  font-family: \"Arvo\", serif;\n  font-size: 25px;\n  margin-bottom: 25px;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   .collaborative[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 15px;\n  color: #c39aa5;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px;\n  font-size: 20px;\n  color: #817985;\n  text-decoration: none;\n}\n.project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%]:hover {\n  color: #407290;\n  cursor: pointer;\n}\n.project[_ngcontent-%COMP%]   .project-icon[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  margin-right: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    font-family: \"Arvo\", serif;\n    font-size: 25px;\n    margin-bottom: 25px;\n    text-align: center;\n  }\n  .project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   .collaborative[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    font-size: 15px;\n    color: #c39aa5;\n    text-align: center;\n  }\n  .project[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]   .project-link[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .project[_ngcontent-%COMP%]   .project-icon[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFSRztFQVNILGFBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEUUk7RUFDSSxPQUFBO0FDTlI7QURRUTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDTlo7QURPWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0F6QlI7QUNvQlI7QURRUTtFQUNJLGVBQUE7QUNOWjtBRFFRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1Qko7RUE2QkkscUJBQUE7QUNOWjtBRE9ZO0VBQ0ksY0FoQ0w7RUFpQ0ssZUFBQTtBQ0xoQjtBRFNJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFVBO0VBRVE7SUFDSSxnQkFBQTtFQ1JWO0VEU1U7SUFDSSwwQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VDUGQ7RURRYztJQUNJLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGNBaEVaO0lBaUVZLGtCQUFBO0VDTmxCO0VEU1U7SUFDSSxrQkFBQTtFQ1BkO0VEVU07SUFDSSxZQUFBO0VDUlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWF1dmU6ICNjMzlhYTU7XG4kZGFyay1waW5rOiNkZGFlYWU7XG4kbGlnaHQtcGluazojZWRjNmJiO1xuJGJhYnk6ICNmZWRjYzg7XG4kY3JlYW06I2ZlZjJkYztcbiRiYWJ5LWJsdWU6Izk5YzZkOTtcbiRkYXJrLWJsdWU6IzQwNzI5MDtcbiRwdXJwbGU6IzgxNzk4NTtcbi5wcm9qZWN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjo1MHB4IDEwJSA1MHB4IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW07XG4gICAgcGFkZGluZzozNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTJweDtcbiAgICAucHJvamVjdC1jb250ZW50e1xuICAgICAgICBmbGV4OjI7XG5cbiAgICAgICAgLnByb2plY3QtdGl0bGV7XG4gICAgICAgICAgICBmb250LWZhbWlseTonQXJ2bycsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XG4gICAgICAgICAgICAuY29sbGFib3JhdGl2ZXtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiRtYXV2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb257XG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1saW5re1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgY29sb3I6JHB1cnBsZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6JGRhcmstYmx1ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtaWNvbntcbiAgICAgICAgZmxleDoxO1xuICAgICAgICBtYXgtd2lkdGg6MTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5wcm9qZWN0e1xuICAgICAgICAucHJvamVjdC1jb250ZW50e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgICAgICAgLnByb2plY3QtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6J0Fydm8nLCBzZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjI1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5jb2xsYWJvcmF0aXZle1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JG1hdXZlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2plY3QtbGlua3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtaWNvbntcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCIucHJvamVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiA1MHB4IDEwJSA1MHB4IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjJkYztcbiAgcGFkZGluZzogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICBmbGV4OiAyO1xufVxuLnByb2plY3QgLnByb2plY3QtY29udGVudCAucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFydm9cIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtdGl0bGUgLmNvbGxhYm9yYXRpdmUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNjMzlhYTU7XG59XG4ucHJvamVjdCAucHJvamVjdC1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM4MTc5ODU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNDA3MjkwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvamVjdCAucHJvamVjdC1pY29uIHtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wcm9qZWN0IC5wcm9qZWN0LWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLnByb2plY3QgLnByb2plY3QtY29udGVudCAucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJ2b1wiLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb2plY3QgLnByb2plY3QtY29udGVudCAucHJvamVjdC10aXRsZSAuY29sbGFib3JhdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjYzM5YWE1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamVjdCAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamVjdCAucHJvamVjdC1pY29uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ResumeComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2);
} }
function ResumeComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interest_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](interest_r3);
} }
class ResumeComponent {
    constructor() {
        this.skills = ['Angular', 'Javascript', 'HTML', 'CSS/SCSS', 'JQuery', 'C++', 'Java', 'Wordpress', 'Photoshop', 'SQL', 'PHP'];
        this.interests = ['Graphic Design', 'Music and Composition', 'Travel', 'Human Computer Interaction'];
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 87, vars: 2, consts: [[1, "container"], [1, "header"], [1, "full-name"], [1, "first-name"], [1, "last-name"], [1, "contact-info"], [1, "email"], [1, "email-val"], [1, "separator"], [1, "phone"], [1, "phone-val"], [1, "about"], [1, "position"], [1, "desc"], [1, "details"], [1, "section"], [1, "section__title"], [1, "section__list"], [1, "section__list-item"], [1, "job"], [1, "name"], [1, "duration"], [1, "addr"], [1, "description"], [1, "education"], [1, "college"], [1, "text"], [1, "skills"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "interests"], ["class", "interest", 4, "ngFor", "ngForOf"], [1, "skill"], [1, "interest"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Amanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Easter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "me@amandaeaster.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "254-723-3045");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Front-end developer with experience in Angular and proficiencies in Javascript, HTML, and CSS. Detail-oriented with a passion for UX design. Excellent written and verbal communication skills; capable of explaining complex technical issues in easy-to-understand terms. Quick learner with new languages and frameworks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Software Developer Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " @ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Citibank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "July 2019 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Irving, TX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Angular development for various internal and external teams. Work with graphing libraries and visualization as well as creation and support of common components for consumption by other Angular teams.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Head of Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " @ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dunkin & Associates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Aug 2017 - May 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "College Station, TX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Managed a web development team, held weekly meetings, handled UX and UI requirements and design, managed and maintained site database.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Dwight Look College of Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " @ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Texas A&M University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Aug 2015 - May 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Spotify Comparison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Angular application that utilizes Spotify's developer API to allow two Spotify users to compare playlist and returns a score of compatibility in songs, artists, and genres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ResumeComponent_div_81_Template, 2, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Interests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ResumeComponent_div_86_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.interests);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: #eee;\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  color: #222;\n  font-size: 14px;\n  line-height: 26px;\n  padding-bottom: 50px;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  background: #fff;\n  margin: 0px auto 0px;\n  box-shadow: 1px 1px 2px #DAD7D7;\n  border-radius: 3px;\n  padding: 40px;\n  margin-top: 50px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.header[_ngcontent-%COMP%]   .full-name[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n}\n\n.header[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.header[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n.header[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.header[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  color: #999;\n  font-weight: 300;\n}\n\n.header[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 10px;\n  display: inline-block;\n  border-left: 2px solid #999;\n  margin: 0px 10px;\n}\n\n.header[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: inline-block;\n  margin-right: 10px;\n  text-decoration: underline;\n}\n\n.details[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n\n.details[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.details[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0px;\n}\n\n.details[_ngcontent-%COMP%]   .section__title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  color: #54AFE4;\n  font-weight: bold;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n\n.details[_ngcontent-%COMP%]   .section__list-item[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.details[_ngcontent-%COMP%]   .section__list-item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n.details[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n}\n\n.details[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.details[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  tex-align: right;\n  width: 39%;\n}\n\n.details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  font-style: italic;\n}\n\n.details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #000;\n}\n\n.details[_ngcontent-%COMP%]   .skills__item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.details[_ngcontent-%COMP%]   .skills__item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.details[_ngcontent-%COMP%]   .skills__item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: #C3DEF3;\n  border-radius: 20px;\n  margin-right: 3px;\n}\n\n.details[_ngcontent-%COMP%]   .skills__item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #79A9CE;\n}\n\n.job[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  display: inline;\n  color: #54AFE4;\n}\n\n.job[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.job[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.job[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  display: inline;\n  float: right;\n}\n\n.education[_ngcontent-%COMP%]   .college[_ngcontent-%COMP%] {\n  display: inline;\n  color: #54AFE4;\n}\n\n.education[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.education[_ngcontent-%COMP%]   .addr[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.education[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  display: inline;\n  float: right;\n}\n\n.section__list-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.section__list-item[_ngcontent-%COMP%]   .GPA[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  font-weight: bold;\n}\n\n.skills[_ngcontent-%COMP%], .interests[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.skills[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .interests[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.skill[_ngcontent-%COMP%], .interest[_ngcontent-%COMP%] {\n  background-color: #54AFE4;\n  border-radius: 4px;\n  color: #fff;\n  margin: 10px;\n  padding: 5px 10px 5px 10px;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: #f9f3e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbWFuZGFlYXN0ZXIvRG9jdW1lbnRzL1JlcG9zaXRvcmllcy9hbWFuZGFlYXN0ZXIvYW1hbmRhZWFzdGVyL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0FDRUo7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENFO0VBQ0UsbUJBQUE7QUNFSjs7QURBSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRU47O0FEQ0k7RUFDRSxnQkFBQTtBQ0NOOztBREVJO0VBQ0UsZ0JBQUE7QUNBTjs7QURHSTtFQUNFLG1CQUFBO0FDRE47O0FESUk7O0VBRUUsV0FBQTtFQUNBLGdCQUFBO0FDRk47O0FES0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDSE47O0FETUk7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0pOOztBRFNFO0VBQ0UsaUJBQUE7QUNOSjs7QURRSTtFQUNFLG1CQUFBO0FDTk47O0FEU0k7RUFDRSxrQkFBQTtBQ1BOOztBRFVJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDUk47O0FEV0k7RUFDRSxtQkFBQTtBQ1ROOztBRFlJO0VBQ0UsZ0JBQUE7QUNWTjs7QURhSTs7RUFFRSxtQkFBQTtFQUNBLHFCQUFBO0FDWE47O0FEY0k7RUFDRSxVQUFBO0FDWk47O0FEZUk7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUNiTjs7QURnQkk7RUFDRSxpQkFBQTtBQ2ROOztBRGlCSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDZk47O0FEa0JJO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0FDaEJOOztBRHVCSTtFQUNFLG1CQUFBO0FDckJOOztBRHlCTTtFQUNFLGFBQUE7QUN2QlI7O0FEMEJNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3hCUjs7QUQyQk07RUFDRSxtQkFBQTtBQ3pCUjs7QUQ4Qk07RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQzNCVjs7QUQ4Qk07RUFDSSxlQUFBO0FDNUJWOztBRDhCTTtFQUNJLGNBQUE7QUM1QlY7O0FEK0JNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUM3QlI7O0FEa0NJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUMvQlI7O0FEa0NJO0VBQ0ksZUFBQTtBQ2hDUjs7QURrQ0k7RUFDSSxjQUFBO0FDaENSOztBRG1DSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDakNOOztBRHNDSTtFQUNJLGdCQUFBO0FDbkNSOztBRHFDSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNuQ1I7O0FEc0NFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNuQ0o7O0FEcUNBO0VBQ0ksY0FBQTtBQ2xDSjs7QURvQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG1DQTtFQUNJLHlCQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7ICBcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwJTsgIFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDsgICBcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4OyBcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjREFEN0Q3O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgIFxuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBcbiAgICAuZnVsbC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5maXJzdC1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIFxuICAgIC5sYXN0LW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhY3QtaW5mbyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZW1haWwgLFxuICAgIC5waG9uZSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfSBcbiAgICBcbiAgICAuc2VwYXJhdG9yIHtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTtcbiAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5wb3NpdGlvbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5kZXRhaWxzIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBcbiAgICAuc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyAgXG4gICAgfVxuICAgIFxuICAgIC5zZWN0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICBcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb25fX3RpdGxlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzU0QUZFNDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIFxuICAgIC5zZWN0aW9uX19saXN0LWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgXG4gICAgLnNlY3Rpb25fX2xpc3QtaXRlbTpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgXG4gICAgLmxlZnQgLFxuICAgIC5yaWdodCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBcbiAgICAubGVmdCB7XG4gICAgICB3aWR0aDogNjAlOyAgICBcbiAgICB9XG4gICAgXG4gICAgLnJpZ2h0IHtcbiAgICAgIHRleC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogMzklOyAgICBcbiAgICB9XG4gICAgXG4gICAgLm5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIFxuICAgIGE6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgXG4gICAgLnNraWxscyB7XG4gICAgICBcbiAgICB9XG4gICAgICBcbiAgICAuc2tpbGxzX19pdGVtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICBcbiAgICB9XG4gICAgXG4gICAgLnNraWxsc19faXRlbSAucmlnaHQge1xuICAgICAgaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQzNERUYzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzc5QTlDRTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmpvYntcbiAgICAgIC5wb3NpdGlvbntcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgY29sb3I6IzU0QUZFNDtcblxuICAgICAgfVxuICAgICAgLm5hbWV7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgICAgLmFkZHJ7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8vICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgIH1cbiAgICAgIC5kdXJhdGlvbnsgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgXG4gIH1cbiAgLmVkdWNhdGlvbntcbiAgICAuY29sbGVnZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBjb2xvcjojNTRBRkU0O1xuXG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICAgIC5hZGRye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICB9XG4gICAgLmR1cmF0aW9ueyBcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG59XG4gIC5zZWN0aW9uX19saXN0LWl0ZW17XG4gICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgfVxuICAgIC5HUEF7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbiAgLnNraWxscywgLmludGVyZXN0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5za2lsbHM+KiAsIC5pbnRlcmVzdHM+KntcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbi5za2lsbCwgLmludGVyZXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IzU0QUZFNDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBtYXJnaW46MTBweDtcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjNlODtcbn1cblxuXG5cbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gICIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjREFEN0Q3O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmhlYWRlciAuZnVsbC1uYW1lIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaGVhZGVyIC5maXJzdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXIgLmxhc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaGVhZGVyIC5jb250YWN0LWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhlYWRlciAuZW1haWwsXG4uaGVhZGVyIC5waG9uZSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhlYWRlciAuc2VwYXJhdG9yIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5oZWFkZXIgLnBvc2l0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmRldGFpbHMge1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5kZXRhaWxzIC5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5kZXRhaWxzIC5zZWN0aW9uOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5kZXRhaWxzIC5zZWN0aW9uX190aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjNTRBRkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5kZXRhaWxzIC5zZWN0aW9uX19saXN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmRldGFpbHMgLnNlY3Rpb25fX2xpc3QtaXRlbTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRldGFpbHMgLmxlZnQsXG4uZGV0YWlscyAucmlnaHQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGV0YWlscyAubGVmdCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uZGV0YWlscyAucmlnaHQge1xuICB0ZXgtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMzklO1xufVxuLmRldGFpbHMgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXRhaWxzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZGV0YWlscyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmRldGFpbHMgLnNraWxsc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZGV0YWlscyAuc2tpbGxzX19pdGVtIC5yaWdodCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZGV0YWlscyAuc2tpbGxzX19pdGVtIC5yaWdodCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI0MzREVGMztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4uZGV0YWlscyAuc2tpbGxzX19pdGVtIC5yaWdodCBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjNzlBOUNFO1xufVxuXG4uam9iIC5wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICM1NEFGRTQ7XG59XG4uam9iIC5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmpvYiAuYWRkciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmpvYiAuZHVyYXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmVkdWNhdGlvbiAuY29sbGVnZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICM1NEFGRTQ7XG59XG4uZWR1Y2F0aW9uIC5uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmVkdWNhdGlvbiAuYWRkciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmVkdWNhdGlvbiAuZHVyYXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNlY3Rpb25fX2xpc3QtaXRlbSAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlY3Rpb25fX2xpc3QtaXRlbSAuR1BBIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNraWxscywgLmludGVyZXN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNraWxscyA+ICosIC5pbnRlcmVzdHMgPiAqIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5za2lsbCwgLmludGVyZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0QUZFNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjNlODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amandaeaster/Documents/Repositories/amandaeaster/amandaeaster/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map