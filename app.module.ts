import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycmpComponent } from './mycmp/mycmp.component';
import { Mycmp2Component } from './mycmp2/mycmp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MycmpComponent,
    Mycmp2Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
