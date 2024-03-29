import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralModule } from './menu-lateral/menu-lateral.module';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModalPesquisaCidadeModule } from './modalPesquisaCidade/modal-pesquisa-cidade.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MenuLateralModule,
        ReactiveFormsModule,
        RouterModule,
        MatSlideToggleModule,
        ModalPesquisaCidadeModule
    ],
    exports:[],
    bootstrap: [AppComponent],
})
export class AppModule { }
