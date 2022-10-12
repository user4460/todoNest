"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
//Moduleとは、アプリケーションの機能をまとめたもの
var common_1 = require("@nestjs/common");
//AppControllerとは、アプリケーションのルートコントローラーです。ルートコントローラーは、アプリケーションの全ての機能を提供するコントローラーです。
var app_controller_1 = require("./app.controller");
//AppServiceとは、アプリケーションのルートサービスです。ルートサービスは、アプリケーションの全ての機能を提供するサービスです。
var app_service_1 = require("./app.service");
var task_module_1 = require("./task/task.module");
//Moduleのデコレーター、@とは、デコレーターを宣言するための記号、
//デコレーターとは、クラスに機能を追加するためのもの
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [task_module_1.TaskModule],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
