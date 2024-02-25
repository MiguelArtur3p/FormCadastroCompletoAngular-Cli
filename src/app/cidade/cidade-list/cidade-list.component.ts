import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cidade } from '../models/Cidade';
import { CidadeService } from '../cidadeServices/cidade.service';
import { ClienteService } from '../../cliente/clienteServices/cliente.service';

@Component({
    selector: 'cidade-list',
    templateUrl: './cidade-list.component.html',
    styleUrl: './cidade-list.component.css',
})
export class CidadeListComponent 
{
    cidades: Cidade[] = [];
    modalEstaAberta: boolean = false
    constructor(
        private _route: ActivatedRoute,
        private _cidadeService: CidadeService,
        private _clienteService: ClienteService
    ) 
    {
        this._clienteService.modalAbertaEmitter.subscribe(resposta => this.modalEstaAberta = resposta)
    }

    async pesquisar(event: Event) 
    {
        this.cidades = await this._cidadeService.obterCidadePorNome((event.target as HTMLInputElement).value);
    }

    passarIdCidadeSelecionada(id: any) 
    {
        if (!id) return;
        this._cidadeService.definirIdCidadeSelecionada(String(id))
    }
}
