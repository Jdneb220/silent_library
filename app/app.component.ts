import {Component} from 'angular2/core';
import {SilentLibraryComponent} from './silentlibrary.component'

@Component({
    selector: 'my-app',
    template: `<h1>Weekend Project by Ben, Ray and Liz</h1>
    <silentlibrary></silentlibrary>
    `
    directives: [SilentLibraryComponent]
})

export class AppComponent {}
