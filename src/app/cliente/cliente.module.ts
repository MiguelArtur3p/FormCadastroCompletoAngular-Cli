import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './clienteServices/cliente.service';
import { CidadeService } from '../cidade/cidadeServices/cidade.service';
import { ClienteRoutingModule } from './clienteRotas/cliente.routing.module';

@NgModule({
  declarations: [ClienteFormComponent, ClienteListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
  ],
  exports: [ClienteFormComponent, ClienteListComponent],
  providers: [],
})
export class ClienteModule { }
