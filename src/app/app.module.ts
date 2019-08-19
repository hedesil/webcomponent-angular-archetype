import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import {<shortenedNameComp>} from './<shortenedName>/<shortenedName>.component';

@NgModule({
  declarations: [<shortenedNameComp>],
  imports: [
    BrowserModule
  ],
  entryComponents: [<shortenedNameComp>],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const customElement = createCustomElement(<shortenedNameComp>, {injector: this.injector});
    customElements.define('<compName>', customElement)
  }

}
