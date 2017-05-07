import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { SilentLibraryComponent } from './silentlibrary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SilentLibraryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
