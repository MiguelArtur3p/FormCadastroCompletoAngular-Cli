import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeModule } from '../cidade/cidade.module';
import { PesquisaCidadeModalComponent } from './pesquisa-cidade-modal/pesquisa-cidade-modal.component';




@NgModule({
  declarations: [PesquisaCidadeModalComponent],
  imports: [
    CommonModule,
    CidadeModule
  ],
  exports:[]
})
export class ModalPesquisaCidadeModule { }
