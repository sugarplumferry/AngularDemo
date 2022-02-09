import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassvalueModule } from './passvalue/passvalue.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PassvalueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
