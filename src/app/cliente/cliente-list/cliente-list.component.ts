import { Component } from '@angular/core';

import { ClienteService } from '../clienteServices/cliente.service';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css',
})
export class ClienteListComponent {
  clientes: Cliente[] = [];

  constructor(private _clienteService: ClienteService) {}

  async pesquisar(event: Event) {
    this.clientes = await this._clienteService.obterClientePorNome(
      (event.target as HTMLInputElement).value
    );
  }
}
