import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cidade } from '../models/Cidade';
import { CidadeService } from '../cidadeServices/cidade.service';
import { ClienteService } from '../../cliente/clienteServices/cliente.service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrl: './cidade-list.component.css',
})
export class CidadeListComponent implements OnInit 
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
    this.cidades = await this._cidadeService.obterCidadePorNome(
      (event.target as HTMLInputElement).value
    );
  }

  passarIdCidadeSelecionada(id: string) 
  {
    console.log(id)
    this._cidadeService.definirIdCidadeSelecionada(id)
  }

  ngOnInit() 
  {
    console.log(this.modalEstaAberta)
    console.log(this.modalEstaAberta)
  }
}
