import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';


import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent
  ],
  exports:[
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    InputMaskModule,
    InputNumberModule,
    SharedModule,
  ]
})
export class PessoasModule { }
