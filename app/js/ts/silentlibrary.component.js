System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SilentLibraryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SilentLibraryComponent = (function () {
                function SilentLibraryComponent(silentlibraryService) {
                    this.title = "Silent Library Rules";
                    this.silentlibrary = silentlibraryService.getSilentLibrary();
                }
                SilentLibraryComponent = __decorate([
                    core_1.Component({
                        selector: 'silentlibrary',
                        template: "\n    <h1>Silent Library</h1>\n    {{ title }}\n    <ul>\n      <li *ngFor=\"#rule of rules\">\n      {{ rule }}\n      </li>\n    </ul>\n    ",
                        providers: [SilentLibraryService]
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], SilentLibraryComponent);
                return SilentLibraryComponent;
            }());
            exports_1("SilentLibraryComponent", SilentLibraryComponent);
        }
    }
});
//# sourceMappingURL=silentlibrary.component.js.map