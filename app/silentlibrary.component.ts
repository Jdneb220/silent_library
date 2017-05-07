import {Component} from 'angular2/core';
// import {SilentlibraryService} from './silentlibrary.service'

@Component({
    selector: 'silentlibrary',
    template: `
    <h1>Silent Library</h1>
    <p>{{ title }}</p>
    <ul>
      <li *ngFor="#rule of rules">
      {{ rule }}
      </li>
    </ul>
    `
    // providers: [SilentlibraryService]
})

export class SilentLibraryComponent {
  title = "Silent Library Rules";
  rules = ["Rule1", "Rule2", "Rule3"];
  silentlibrary;

  // constructor(silentlibraryService: SilentlibraryService){
  //   this.silentlibrary = silentlibraryService.getSilentlibrary();
  // }
}
