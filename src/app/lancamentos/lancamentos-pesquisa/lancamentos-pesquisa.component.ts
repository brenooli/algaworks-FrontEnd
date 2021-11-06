import { Component, OnInit } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  descricao?: string;
  lancamentos: any = [];
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;

  constructor(private lancamentoService: LancamentoService ){}

  ngOnInit(): void{
    this.pesquisar();
  }

  pesquisar(): void{
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim

    }
    this.lancamentoService.pesquisar( filtro )
      .then( lancamentos => this.lancamentos = lancamentos );

  }

}
