"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var recent_component_1 = require('./recent.component');
var artists_component_1 = require('./artists.component');
var video_service_1 = require('./video.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'artists',
                        component: artists_component_1.ArtistsComponent
                    },
                    {
                        path: 'recent',
                        component: recent_component_1.RecentComponent
                    },
                    {
                        path: '',
                        redirectTo: '/recent',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                recent_component_1.RecentComponent,
                artists_component_1.ArtistsComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                video_service_1.VideoService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map