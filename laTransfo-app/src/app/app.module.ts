import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PageHome } from '../pages/pageHome/pageHome';
import { PageQuestion } from '../pages/pageQuestion/pageQuestion';
import { PageProposition } from '../pages/pageProposition/pageProposition';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    PageHome,
    PageQuestion,
    PageProposition,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PageHome,
    PageQuestion,
    PageProposition,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
