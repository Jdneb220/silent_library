import {Component} from 'angular2/core';
import {SilentLibraryComponent} from './silentlibrary.component'
import {AmountPlayersComponent} from
'./amountplayers.component'

@Component({
    selector: 'my-app',
    template: `
    <amount class="center-block"></amount>
    <silentlibrary></silentlibrary>
    <div id="gameboard" style="padding:20px"></div>

    `,
    directives: [SilentLibraryComponent, AmountPlayersComponent]
})

export class AppComponent {}
