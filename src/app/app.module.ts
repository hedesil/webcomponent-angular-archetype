import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {<shortenedNameUpper>} from './<shortenedNameUpper>/<shortenedName>.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [<shortenedNameUpper>],
  entryComponents: [<shortenedNameUpper>],
})

export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Se usa el metodo createCustomElement de Angular para crear un wc adecuado al estandar
    const customElement = createCustomElement(<shortenedNameUpper>, {injector: this.injector});
    customElements.define('<compName>', customElement);
  }
}




