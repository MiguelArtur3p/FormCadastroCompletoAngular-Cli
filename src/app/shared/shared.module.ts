import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaCidadeModalComponent } from './pesquisa-cidade-modal/pesquisa-cidade-modal.component';
import { CidadeModule } from '../cidade/cidade.module';



@NgModule({
  declarations: [PesquisaCidadeModalComponent],
  imports: [
    CommonModule,
    CidadeModule
  ],
})
export class SharedModule { }
