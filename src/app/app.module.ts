import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralModule } from './menu-lateral/menu-lateral.module';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './usuario/services/usuario.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from './shared/shared.module';
import { CidadeService } from './cidade/cidadeServices/cidade.service';
import { SharedService } from './shared/sharedServices/shared.service';
import { ClienteService } from './cliente/clienteServices/cliente.service';

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
        SharedModule
    ],
    bootstrap: [AppComponent],
    providers: [UsuarioService, CidadeService, SharedService, ClienteService],
})
export class AppModule { }
