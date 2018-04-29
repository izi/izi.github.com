webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_list_post_list_component__ = __webpack_require__("./src/app/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_game_of_life_game_of_life_component__ = __webpack_require__("./src/app/post/game-of-life/game-of-life.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'post-list', component: __WEBPACK_IMPORTED_MODULE_2__post_list_post_list_component__["a" /* PostListComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_5__post_game_of_life_game_of_life_component__["a" /* GameOfLifeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot([]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n  <header class=\"masthead mb-auto\">\n    <div class=\"inner\">\n      <h3 class=\"masthead-brand\">Broken Ninja</h3>\n      <nav class=\"nav nav-masthead justify-content-center\">\n        <a class=\"nav-link active\" [routerLink]=\"['/dashboard']\">Home</a>\n        <a class=\"nav-link\" [routerLink]=\"['/post-list']\">Posts</a>\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\n      </nav>\n    </div>\n  </header>\n\n  <router-outlet></router-outlet>\n\n  <footer class=\"mastfoot mt-auto\">\n      <div class=\"inner\">\n        <p>\n          Thoughts by <a href=\"https://www.linkedin.com/in/krzysztof-suchomski-86468931/\">Krzysztof Suchomski</a>.\n          2018\n        </p>\n      </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".cover-container {\n  max-width: 42em; }\n\n/*\n * Header\n */\n\n.masthead {\n  margin-bottom: 2rem; }\n\n.masthead-brand {\n  margin-bottom: 0; }\n\n.nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent; }\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, 0.25); }\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff; }\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left; }\n  .nav-masthead {\n    float: right; } }\n\n/*\n   * Cover\n   */\n\n.cover {\n  padding: 0 1.5rem; }\n\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700; }\n\n/*\n   * Footer\n   */\n\n.mastfoot {\n  color: rgba(255, 255, 255, 0.5); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_gist_dist_ngx_gist_module__ = __webpack_require__("./node_modules/ngx-gist/dist/ngx-gist.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_gist_dist_ngx_gist_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_gist_dist_ngx_gist_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_component__ = __webpack_require__("./src/app/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_game_of_life_game_of_life_component__ = __webpack_require__("./src/app/post/game-of-life/game-of-life.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_postgres_plv8_side_effects_postgres_plv8_side_effects_component__ = __webpack_require__("./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__post_game_of_life_game_of_life_component__["a" /* GameOfLifeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_postgres_plv8_side_effects_postgres_plv8_side_effects_component__["a" /* PostgresPlv8SideEffectsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_gist_dist_ngx_gist_module__["NgxGistModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"inner cover\">\n  <h1 class=\"cover-heading\">Contact </h1>\n  <p>\n      Preffered option is direct message trough LinkedIn.\n  </p>\n  <p>\n    <a href=\"https://www.linkedin.com/in/krzysztof-suchomski-86468931/\">\n      <i class=\"fa fa-linkedin-square\"></i> Linked In</a> - \n  </p>\n  <!-- <p>\n        <i class=\"fa fa-envelope\"></i>\n    </p> -->\n  <p>\n    <a href=\"https://github.com/izi\">\n      <i class=\"fa fa-github\"></i> Github</a>\n  </p>\n</main>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"inner cover\">\n  <h1 class=\"cover-heading\">Breaking one thing at a time.</h1>\n  <p class=\"lead\">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen\n    background photo to make it your own.</p>\n  <p class=\"lead\">\n    <a [routerLink]=\"['/post-list']\" class=\"btn btn-lg btn-secondary\">Explore</a>\n  </p>\n</main>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"inner cover\">\n  <h1 class=\"cover-heading\">Cover your page.</h1>\n  <p>\n      <ngx-gist [gistId]=\"'izi/8c9bcd010df6d34461a3a6d47eff0276'\"></ngx-gist>\n      <ngx-gist [gistId]=\"'izi/32996449801f30fbc980e2e2a95cf891'\"></ngx-gist>\n      <ngx-gist [gistId]=\"'izi/0fa11ba166955d1120e44c94e6d2bac1'\"></ngx-gist>\n      <ngx-gist [gistId]=\"'izi/82cdd3bb87f1a01653e38f9d8c090ee0'\"></ngx-gist>  \n      \n  </p>\n</main>"

/***/ }),

/***/ "./src/app/post-list/post-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostListComponent = /** @class */ (function () {
    function PostListComponent() {
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__("./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__("./src/app/post-list/post-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/post/game-of-life/game-of-life.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Game of Life</h1>\n<p>\n  This is just some fun with a classic cellurar automaton. The rules are described in detail on Wikipedia.\n\n  I'm using D3\n</p>\n<!-- <table>\n  <tr *ngFor=\"let row of game.board\">\n    <td style=\"width: 15px; height: 15px;\" *ngFor=\"let cell of row\">{{ cell == 1 ? 'X' : '' }}</td>\n  </tr>\n</table> -->\n<div class=\"game-of-life-svg\" id=\"game-of-life-svg\">\n  \n</div>\n<h2>References</h2>\n\n   <ul>\n     <li><a href=\"https://d3js.org/\"></a>D3 JS</li>\n     <li><a href=\"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life\">Game of Life Wikipedia</a></li>\n   </ul> \n   <p>\n</p>"

/***/ }),

/***/ "./src/app/post/game-of-life/game-of-life.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/game-of-life/game-of-life.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOfLifeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("./node_modules/d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_of_life__ = __webpack_require__("./src/app/post/game-of-life/game-of-life.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameOfLifeComponent = /** @class */ (function () {
    function GameOfLifeComponent(element) {
        var _this = this;
        this.element = element;
        this.game = new __WEBPACK_IMPORTED_MODULE_3__game_of_life__["a" /* GameOfLife */](50, 50);
        this.width = 500;
        this.height = 500;
        console.log('Game of life');
        this.game.random();
        this.game = __WEBPACK_IMPORTED_MODULE_3__game_of_life__["b" /* GameOfLifePattern */].spaceship();
        this.elHeight = this.height / this.game.height;
        this.elWidth = this.width / this.game.width;
        var gameTimer = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_timer__["a" /* timer */])(1000, 1000);
        var sub = gameTimer.subscribe(function (t) {
            _this.game.next();
            _this.drawBoard();
        });
    }
    GameOfLifeComponent.prototype.ngOnInit = function () {
        this.grid = __WEBPACK_IMPORTED_MODULE_2_d3__["a" /* select */](this.element.nativeElement).select('#game-of-life-svg')
            .append('svg')
            .attr('width', this.width + 'px')
            .attr('height', this.height + 'px');
        var h = this.elHeight;
        var w = this.elWidth;
        this.row = this.grid.selectAll('.row')
            .data(this.game.board)
            .enter().append('g')
            .attr('class', 'row')
            .attr('transform', function (d, i) { return 'translate(0 ' + i * h + ')'; });
        var column = this.row.selectAll('.square')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('class', 'square')
            .attr('x', function (d, i) { return i * w; })
            .attr('width', function (d, i) { return w; })
            .attr('height', function (d, i) { return h; })
            .style('fill', function (d) { return d === 0 ? '#fff' : '#000'; })
            .style('stroke', '#222');
        this.drawBoard();
    };
    GameOfLifeComponent.prototype.drawBoard = function () {
        var h = this.elHeight;
        var w = this.elWidth;
        this.row = this.grid.selectAll('.row')
            .data(this.game.board);
        var column = this.row.selectAll('.square')
            .data(function (d) { return d; })
            .transition()
            .duration(1000)
            .style('fill', function (d) {
            return d === 0 ? '#fff' : '#000';
        });
    };
    GameOfLifeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game-of-life',
            template: __webpack_require__("./src/app/post/game-of-life/game-of-life.component.html"),
            styles: [__webpack_require__("./src/app/post/game-of-life/game-of-life.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], GameOfLifeComponent);
    return GameOfLifeComponent;
}());



/***/ }),

/***/ "./src/app/post/game-of-life/game-of-life.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOfLife; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameOfLifePattern; });
var GameOfLife = /** @class */ (function () {
    function GameOfLife(height, width) {
        var elements = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            elements[_i - 2] = arguments[_i];
        }
        var _this = this;
        this.height = height;
        this.width = width;
        this.board = this.empty();
        if (elements) {
            elements.forEach(function (e) { return _this.board[e[0]][e[1]] = 1; });
        }
    }
    GameOfLife.prototype.next = function () {
        var newBoard = this.empty();
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                var liveNeighbours = this.liveNeighbours(i, j);
                if (this.board[i][j] === 1 && (liveNeighbours === 2 || liveNeighbours === 3)) {
                    newBoard[i][j] = 1;
                }
                else if (this.board[i][j] === 0 && liveNeighbours === 3) {
                    newBoard[i][j] = 1;
                }
                else {
                    newBoard[i][j] = 0;
                }
            }
        }
        this.board = newBoard;
    };
    GameOfLife.prototype.liveNeighbours = function (row, col) {
        var liveNeighbours = 0;
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (!(i === row && j === col)) {
                    var r = i < 0 ? i + this.height : (i >= this.height ? i - this.height : i);
                    var c = j < 0 ? j + this.width : (j >= this.width ? j - this.width : j);
                    // if (this.board[row][col] === 1) {
                    // console.log(i, j, r, c);
                    // }
                    liveNeighbours += this.board[r][c];
                    // if (!(i === row && col === j) && (i >= 0 && i < this.height && j >= 0 && j < this.width)) {
                    // liveNeighbours += this.board[i][j];
                    // }
                }
            }
        }
        return liveNeighbours;
    };
    GameOfLife.prototype.random = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                this.board[i][j] = Math.random() > 0.5 ? 1 : 0;
            }
        }
    };
    GameOfLife.prototype.empty = function () {
        var board = Array(this.height);
        for (var i = 0; i < this.height; i++) {
            board[i] = [];
            for (var j = 0; j < this.width; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    };
    return GameOfLife;
}());

var GameOfLifePattern = /** @class */ (function () {
    function GameOfLifePattern() {
    }
    GameOfLifePattern.block = function () {
        return new GameOfLife(4, 4, [1, 1], [1, 2], [2, 1], [2, 2]);
    };
    GameOfLifePattern.beehive = function () {
        return new GameOfLife(5, 6, [2, 1], [1, 2], [1, 3], [3, 2], [3, 3], [2, 4]);
    };
    GameOfLifePattern.loaf = function () {
        return new GameOfLife(6, 6, [2, 1], [1, 2], [1, 3], [3, 2], [4, 3], [2, 4], [3, 4]);
    };
    GameOfLifePattern.boat = function () {
        return new GameOfLife(5, 5, [1, 1], [1, 2], [2, 1], [2, 3], [3, 2]);
    };
    GameOfLifePattern.tub = function () {
        return new GameOfLife(5, 5, [1, 2], [2, 1], [2, 3], [3, 2]);
    };
    GameOfLifePattern.blinker = function () {
        return new GameOfLife(5, 5, [1, 2], [2, 2], [3, 2]);
    };
    GameOfLifePattern.toad = function () {
        return new GameOfLife(6, 6, [2, 2], [2, 3], [2, 4], [3, 1], [3, 2], [3, 3]);
    };
    GameOfLifePattern.beacon = function () {
        return new GameOfLife(6, 6, [1, 1], [1, 2], [2, 1], [4, 3], [4, 4], [3, 4]);
    };
    GameOfLifePattern.glider = function () {
        return new GameOfLife(6, 6, [1, 1], [2, 2], [2, 3], [3, 1], [3, 2]);
    };
    GameOfLifePattern.spaceship = function () {
        return new GameOfLife(10, 10, [1, 1], [1, 4], [3, 1], [4, 2], [4, 3], [4, 4], [4, 5], [3, 5], [2, 5]);
    };
    GameOfLifePattern.gosperGliderGun = function () {
        return new GameOfLife(50, 50, [5, 1], [5, 2], [6, 1], [6, 2], [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18], [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], [3, 35], [4, 35], [3, 36], [4, 36]);
    };
    GameOfLifePattern.line = function (size) {
        var game = new GameOfLife(size, size);
        var row = size / 2;
        for (var col = 0; col < size; col++) {
            game.board[row][col] = 1;
        }
        return game;
    };
    return GameOfLifePattern;
}());



/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  post works!\n</p>\n"

/***/ }),

/***/ "./src/app/post/post.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n</p>"

/***/ }),

/***/ "./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostgresPlv8SideEffectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostgresPlv8SideEffectsComponent = /** @class */ (function () {
    function PostgresPlv8SideEffectsComponent() {
    }
    PostgresPlv8SideEffectsComponent.prototype.ngOnInit = function () {
    };
    PostgresPlv8SideEffectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-postgres-plv8-side-effects',
            template: __webpack_require__("./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.html"),
            styles: [__webpack_require__("./src/app/post/postgres-plv8-side-effects/postgres-plv8-side-effects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostgresPlv8SideEffectsComponent);
    return PostgresPlv8SideEffectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map