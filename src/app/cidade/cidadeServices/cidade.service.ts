import { Injectable } from '@angular/core';

import { Cidade } from '../models/Cidade';

@Injectable({
  providedIn: 'root',
})
export class CidadeService 
{
  idCidadeSelecionada: string | undefined;

  gerarOpcoesFetch(method: string, cidade: Cidade) 
  {
    return {
      method: method,
      body: JSON.stringify(cidade),
      headers: 
      {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
  }

  async obterCidadePorNome(nomeCidade: string) 
  {
    if (!nomeCidade || nomeCidade.match(/^\W|^[0-9]/g)) return;
    let pesquisa = nomeCidade.toLowerCase();
    let resposta = await fetch(`http://localhost:3000/cidades?q=${pesquisa}`);
    let cidades = await resposta.json();
    return cidades;
  }

  async obterCidadePorId(id: string) 
  {
    if (!id) return;
    let resposta = await fetch(`http://localhost:3000/cidades/${id}`);
    if (resposta.status === 404) return;
    let cidade = await resposta.json();
    return cidade;
  }

  adicionar(cidade: Cidade) 
  {
    if (!cidade) return;
    fetch(
      `http://localhost:3000/cidades`,
      this.gerarOpcoesFetch('POST', cidade)
    );
  }

  editar(cidade: Cidade) 
  {
    if (!cidade) return;
    fetch(
      `http://localhost:3000/cidades/${cidade.id}`,
      this.gerarOpcoesFetch('PUT', cidade)
    );
  }

  remover(id: string) 
  {
    if (!id) return;
    fetch(`http://localhost:3000/cidades/${id}`, { method: 'DELETE' });
  }

  definirIdCidadeSelecionada(id: string) 
  {
    this.idCidadeSelecionada = id;
  }
}
