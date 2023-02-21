import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DaliComponentsModule } from '@alicorpdigital/dali-components-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DaliComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
