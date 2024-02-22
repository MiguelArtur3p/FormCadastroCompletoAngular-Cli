import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CidadeService } from '../../cidade/cidadeServices/cidade.service';
import { SharedService } from '../sharedServices/shared.service';
@Component({
  selector: 'app-pesquisa-cidade-modal',
  templateUrl: './pesquisa-cidade-modal.component.html',
  styleUrl: './pesquisa-cidade-modal.component.css',
})
export class PesquisaCidadeModalComponent 
{

  constructor(public dialog: MatDialog, public _cidadeService: CidadeService, private _sharedService: SharedService) { }

  fechar() 
  {
    this.dialog.closeAll();
  }

  emitirIdSelecionado() 
  {
    let id = this._cidadeService.idCidadeSelecionada;
    if (!id) return;
    this._sharedService.emitirId(id)
    this.dialog.closeAll();
  }
}
