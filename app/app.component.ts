import {Component} from 'angular2/core';
import {SilentLibraryComponent} from './silentlibrary.component'
import {AmountPlayersComponent} from
'./amountplayers.component'

@Component({
    selector: 'my-app',
    styleUrls: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'],
    template: `
    <div class='row'>
    <div class='col-md-4'>
    <amount class="center-block"></amount>
    <silentlibrary id="mysilentlibrary"></silentlibrary>
    </div><div class='col-md-8'>
    <div id="gameboard" style="padding:20px"></div>
    </div>
    `,
    directives: [SilentLibraryComponent, AmountPlayersComponent]
})

export class AppComponent {}
