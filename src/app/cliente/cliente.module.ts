import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteRoutingModule } from './clienteRotas/cliente.routing.module';
import { CampoControlInvalidModule } from '../shared/ContenteCampoInvalid/campo-control-invalid.module';


@NgModule({
    declarations: [ClienteFormComponent, ClienteListComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClienteRoutingModule,
        CampoControlInvalidModule
    ],
    exports: [ClienteFormComponent, ClienteListComponent],
})
export class ClienteModule { }
