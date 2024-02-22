import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeService } from './cidadeServices/cidade.service';
import { CidadeRoutingModule } from './cidadeRotas/cidade.routing.module';

@NgModule({
  declarations: [CidadeListComponent, CidadeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CidadeRoutingModule,
  ],
  exports:[CidadeListComponent,CidadeFormComponent],
  providers: [CidadeService],
})
export class CidadeModule {}
