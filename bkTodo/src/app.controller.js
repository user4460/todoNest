"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
//Controlloerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
//Getとは、HTTPメソッドの一つで、GETメソッドを受け取った時に、処理を行うことを示すデコレータ
var common_1 = require("@nestjs/common");
//Controllerとは、リクエストを受け取り、レスポンスを返す役割を持つクラスのこと
var AppController = /** @class */ (function () {
    //constructorとは、クラスのインスタンスを生成するときに、呼び出されるメソッド
    function AppController(appService) {
        this.appService = appService;
    }
    //Getとは、HTTPメソッドの一つで、GETメソッドを受け取った時に、処理を行うことを示すデコレータ
    AppController.prototype.getHello = function () {
        return this.appService.getHello();
    };
    //Postとは、HTTPメソッドの一つで、POSTメソッドを受け取った時に、処理を行うことを示すデコレータ
    AppController.prototype.postHello = function () {
        return this.appService.postHello();
    };
    //Deleteとは、HTTPメソッドの一つで、DELETEメソッドを受け取った時に、処理を行うことを示すデコレータ
    AppController.prototype.deleteHello = function () {
        return this.appService.deleteHello();
    };
    __decorate([
        (0, common_1.Get)()
    ], AppController.prototype, "getHello");
    __decorate([
        (0, common_1.Post)()
    ], AppController.prototype, "postHello");
    __decorate([
        (0, common_1.Delete)()
    ], AppController.prototype, "deleteHello");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
