import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPesquisaCidadeService 
{
  idCidadeSelecionadaEmitter = new EventEmitter<string>();

  emitirId(id: string) 
  {
    this.idCidadeSelecionadaEmitter.emit(id);
  }
}
