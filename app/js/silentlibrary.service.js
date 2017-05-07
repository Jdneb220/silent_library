System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SilentlibraryService;
    return {
        setters:[],
        execute: function() {
            SilentlibraryService = (function () {
                function SilentlibraryService() {
                }
                SilentlibraryService.prototype.getSilentlibrary = function () {
                    return ["Rule1", "Rule2", "Rule3"];
                };
                return SilentlibraryService;
            }());
            exports_1("SilentlibraryService", SilentlibraryService);
        }
    }
});
//# sourceMappingURL=silentlibrary.service.js.map