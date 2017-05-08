System.register(['angular2/core', './silentlibrary.service'], function(exports_1, context_1) {
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
    var core_1, silentlibrary_service_1;
    var SilentLibraryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (silentlibrary_service_1_1) {
                silentlibrary_service_1 = silentlibrary_service_1_1;
            }],
        execute: function() {
            SilentLibraryComponent = (function () {
                function SilentLibraryComponent(silentlibraryService) {
                    this.clickMessage = '';
                    this.clickCard = '';
                    this.title = "Silent Library Rules";
                    this.rules = ["Pick number of players", "On the count of three, flip over cards", "Whoever gets the skull card needs to do a task", "Must complete the task without making noise"];
                    this.punishments = [
                        "The contestant must endure a balloon being blown up under his/her shirt until it busts.",
                        "The contestant must endure wet willies in each ear from his/her teammates.",
                        "The contestant must stand in a bucket of ice cold water for 20 seconds.",
                        "The contestant must do a shot of soy sauce.",
                        "The contestant must endure eggs being smashed on the top of his/her head from his teammates.",
                        "The contestant must eat 5 marshmallows in 15 seconds.",
                        "The contestant must be smacked in the rear with snapping towels from his fellow teammates.",
                        "The contestant must endure a hair being plucked from each eye brow from fellow teammates.",
                        "The contestant must eat whip cream from a dirty old shoe.",
                        "The contestant must stop the fizz with his/her mouth from escaping the bottle of coke with a Mento dropped in.",
                        "The contestant must eat chocolate covered insects in 20 seconds.",
                        "The contestant must endure noogies given by his teammates for 10 seconds.",
                        "The contestant must eat a hot pepper.",
                        "The contestant must eat an ice cream cone filled with mayonnaise.",
                        "The contestant must be spun round and round by his teammates and then made to walk in a straight line.",
                        "The contestant must endure 30 seconds of being tickled by feathers from his/her teammates.",
                        "The contestant must chew a piece of gum for 15 seconds that has already been chewed.",
                        "The contestant must undergo rubber bands being snapped against his/her arm.",
                        "The contestant must endure Nerf arrows being repeatedly shot at his/her chest for 20 seconds.",
                        "The contestant must wear a headband with chocolates dangling from it and eat the chocolates without using his/her hands.",
                        "The contestant must endure teammates pulling back on suspenders and then releasing them.",
                        "The contestants must eat 10-15 peas in one minute.",
                        "Give contestants 2-3 bubblegum balls. They have 60-90 seconds to chew it up and blow a bubble.",
                        "Blow up balloons so there are 1-2 more than team members. They must keep the balloons in the air for 90 seconds without talking.",
                        "Contestants must write their full name (first, middle, and last) with their toes and a marker.",
                        "While wearing huge ski gloves or tube socks, teen unwrap Hershey kisses. Whoever unwraps the most in a given time period wins.",
                        "Give teens hex nuts and a chopstick. Whoever can get the tallest stack wins!",
                        "The contestants use spoons to carry marbles (or other small objects) from one side of the room to the other.",
                        "Attach small cups to headbands. Contestants must throw balls into the air and catch it in their bucket without using their hands.",
                        "Duplicate complicated ballet moves from a YouTube video.",
                        "Contestant must do the chicken dance.",
                        "Contestant has to crush all the pieces of penne pasta into smaller pieces using your bare feet.",
                        "Contestant must take a shot of maple syrup (use small bathroom cups.)",
                        "Duplicate complicated yoga moves from a YouTube video.",
                        "Contestants must all sit on whoopee cushions without laughing (The only sound allowed is the whoopee cushion).",
                        "Contestant must dance along to the video of Thriller by Michael Jackson.",
                        "Contestants must drink an entire Happy Meal blended and puréed together (including the drink)"
                    ];
                    this.cards = ["GA_Logo.png", "skull.png"]; //we need to make the # of cards the same as players
                    this.silentlibrary = silentlibraryService.getSilentlibrary();
                }
                SilentLibraryComponent.prototype.onClick = function (event) {
                    var randPunIndex = Math.floor((Math.random() * (this.punishments.length)));
                    this.clickMessage = this.punishments[randPunIndex];
                    // console.log("this button was clicked")
                };
                SilentLibraryComponent.prototype.onClickCard = function (event) {
                    var randCardIndex = Math.floor((Math.random() * (this.cards.length)));
                    this.clickCard = this.cards[randCardIndex];
                };
                SilentLibraryComponent = __decorate([
                    core_1.Component({
                        selector: 'silentlibrary',
                        template: "\n    <h1>Silent Library</h1>\n            <p>{{ title }}</p>\n            <ul>\n              <li *ngFor=\"#rule of rules\">\n              {{ rule }}\n              </li>\n            </ul>\n            <br>\n            <h2>Punishments</h2>\n            {{ clickMessage }}\n            <br>\n            <button (click)=\"onClick($event)\">Submit</button>\n    ",
                        providers: [silentlibrary_service_1.SilentlibraryService]
                    }), 
                    __metadata('design:paramtypes', [silentlibrary_service_1.SilentlibraryService])
                ], SilentLibraryComponent);
                return SilentLibraryComponent;
            }());
            exports_1("SilentLibraryComponent", SilentLibraryComponent);
        }
    }
});
//# sourceMappingURL=silentlibrary.component.js.map