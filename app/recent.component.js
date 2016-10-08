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
var video_service_1 = require('./video.service');
var RecentComponent = (function () {
    function RecentComponent(videoService) {
        this.videoService = videoService;
    }
    RecentComponent.prototype.getVideos = function () {
        var _this = this;
        this.videoService.getVideos().then(function (videos) { return _this.videos = videos; });
    };
    RecentComponent.prototype.ngOnInit = function () {
        this.getVideos();
    };
    RecentComponent = __decorate([
        core_1.Component({
            selector: 'my-recent',
            templateUrl: 'app/recent.component.html',
            styleUrls: ['app/recent.component.css']
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], RecentComponent);
    return RecentComponent;
}());
exports.RecentComponent = RecentComponent;
//# sourceMappingURL=recent.component.js.map