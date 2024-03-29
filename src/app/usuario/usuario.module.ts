import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuarioRotas/usuario-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations: [LoginFormComponent],
    imports: [CommonModule, UsuarioRoutingModule, ReactiveFormsModule, FormsModule],
    exports: [LoginFormComponent],
})
export class UsuarioModule { }
