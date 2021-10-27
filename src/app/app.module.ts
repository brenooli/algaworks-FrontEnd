import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

import { PessoasModule } from './pessoas/pessoas.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    AppRoutingModule,

    PessoasModule,
    LancamentosModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
