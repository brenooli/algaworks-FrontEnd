import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent {

  @Input() lancamentos: any = [];
  @Input() filtro: any;
  @Input() totalRegistros: any;

  @Output() calculoPagina = new EventEmitter();

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event!.first! / event!.rows!;
    this.calculoPagina.emit(pagina);
  }

}
