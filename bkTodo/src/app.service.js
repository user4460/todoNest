"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
//Injectableとは、DIコンテナに登録するためのデコレーター
//DIコンテナに登録することで、他のクラスからインスタンスを取得できるようになる
//DIコンテナとは、クラスのインスタンスを生成し、管理する仕組み
var common_1 = require("@nestjs/common");
var AppService = /** @class */ (function () {
    function AppService() {
    }
    //getHelloとは、Hello World!を返すメソッド
    AppService.prototype.getHello = function () {
        return 'Hello World!';
    };
    //追記　getHelloの真似、postHelloとは、Hello World!を返すメソッド
    AppService.prototype.postHello = function () {
        //getHelloとは、Hello World!を返すメソッド
        return 'Hello World!';
    };
    //追記　getHelloの真似、updateHelloとは、Hello World!を返すメソッド
    AppService.prototype.deleteHello = function () {
        //getHelloとは、Hello World!を返すメソッド
        return 'Hello World!';
    };
    AppService = __decorate([
        (0, common_1.Injectable)()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
