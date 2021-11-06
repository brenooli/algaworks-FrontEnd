import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LancamentoService } from './lancamentos/lancamento.service';
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
    CoreModule,


  ],
  providers: [LancamentoService, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
