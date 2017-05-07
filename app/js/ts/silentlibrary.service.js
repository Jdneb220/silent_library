System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SilentLibraryService;
    return {
        setters:[],
        execute: function() {
            SilentLibraryService = (function () {
                function SilentLibraryService() {
                }
                SilentLibraryService.prototype.getSilentLibrary = function () {
                    return ["Rule1", "Rule2", "Rule3"];
                };
                return SilentLibraryService;
            }());
            exports_1("SilentLibraryService", SilentLibraryService);
        }
    }
});
//# sourceMappingURL=silentlibrary.service.js.map