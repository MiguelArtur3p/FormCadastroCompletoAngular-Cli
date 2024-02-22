import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent 
{
  loginForm: FormGroup;
  usuario: Usuario | undefined;
  constructor(
    private _loginService: UsuarioService,
    private _formBuilder: FormBuilder
  ) 
  {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  criarUsuario() 
  {
    this.usuario = Object.assign({}, this.loginForm.value);
  }

 async fazerLogin() 
 {
    this.criarUsuario();
    if (!this.usuario) return;
    await this._loginService.obterUsuario(this.usuario.email);
    this._loginService.fazerLogin(this.usuario);
  }
}
