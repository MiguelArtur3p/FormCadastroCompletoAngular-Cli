import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeRoutingModule } from './cidadeRotas/cidade.routing.module';
import { CampoControlInvalidModule } from '../shared/ContenteCampoInvalid/campo-control-invalid.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';

@NgModule({
    declarations: [CidadeListComponent, CidadeFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CidadeRoutingModule, 
        CampoControlInvalidModule
    ],
    exports: [CidadeListComponent, CidadeFormComponent],
})
export class CidadeModule { }
