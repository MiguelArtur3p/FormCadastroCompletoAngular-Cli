import { EventEmitter, Injectable } from '@angular/core';

import { Cliente } from '../models/Cliente';

@Injectable({
    providedIn: 'root',
})
export class ClienteService 
{
    modalAbertaEmitter = new EventEmitter<boolean>();

    gerarOpcoesFetch(method: string, cliente: Cliente) 
    {
        return {
            method: method,
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };
    }

    async obterClientePorNome(nome: string) 
    {
        if (!nome || nome.match(/^\W|^[0-9]/g)) return;
        let pesquisa = nome.toLowerCase();
        let resposta = await fetch(`http://localhost:3000/clientes?q=${pesquisa}`);
        let clientes = await resposta.json();
        return clientes;
    }

    async obterClientePorId(id: number) 
    {
        if (!id) return;
        let resposta = await fetch(`http://localhost:3000/clientes/${id}`);
        let cliente = await resposta.json();
        return cliente;
    }

    adicionar(cliente: Cliente) 
    {
        if (!cliente) return;
        fetch(
            `http://localhost:3000/clientes`,
            this.gerarOpcoesFetch('POST', cliente)
        );
    }

    editar(cliente: Cliente) 
    {
        if (!cliente) return;
        fetch(
            `http://localhost:3000/clientes/${cliente.id}`,
            this.gerarOpcoesFetch('PUT', cliente)
        );
    }

    remover(id: number) 
    {
        if (!id) return;
        fetch(`http://localhost:3000/clientes/${id}`, { method: 'DELETE' });
    }

    emitirEventoAbrirModal(resposta: boolean) 
    {
        console.log('tes', resposta)
        this.modalAbertaEmitter.emit(resposta)
    }
}
