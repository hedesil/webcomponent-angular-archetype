import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {<shortenedNameComp>} from './<shortenedName>/<shortenedName>.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [<shortenedNameComp>],
  entryComponents: [<shortenedNameComp>],
})

export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Se usa el metodo createCustomElement de Angular para crear un wc adecuado al estandar
    const customElement = createCustomElement(<shortenedNameComp>, {injector: this.injector});
    customElements.define('<compName>', customElement);
  }
}




