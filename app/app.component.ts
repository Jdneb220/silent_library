import {Component} from 'angular2/core';
import {SilentLibraryComponent} from './silentlibrary.component'
import {AmountPlayersComponent} from
'./amountplayers.component'

@Component({
    selector: 'my-app',
    template: `<h1>Weekend Project by Ben, Ray and Liz</h1>
    <amount></amount><br>
    <silentlibrary></silentlibrary><br>
    `
    directives: [SilentLibraryComponent, AmountPlayersComponent]
})

export class AppComponent {}
