import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-pesquisa-cidade-modal',
    templateUrl: './pesquisa-cidade-modal.component.html',
    styleUrl: './pesquisa-cidade-modal.component.css',
})
export class PesquisaCidadeModalComponent {

    constructor(public dialog: MatDialog,) { }

    fechar() 
    {
        this.dialog.closeAll();
    }

}
