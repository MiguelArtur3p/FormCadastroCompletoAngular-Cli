import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService 
{
  usuarioLogado: boolean = false;
  mostrarConteudoEmitter = new EventEmitter<boolean>();
  usuario!: Usuario[];
  constructor(private _router: Router) { }

  async obterUsuario(email: string) 
  {
    let resposta = await fetch(`http://localhost:3000/usuario?q=${email}`);
    let usuario = await resposta.json();
    this.usuario = usuario;
  }

  fazerLogin(usuario: Usuario) 
  {
    if (
      this.usuario[0].email === usuario.email &&
      this.usuario[0].senha === usuario.senha
    ) 
    {
      this.usuarioLogado = true;
      this.mostrarConteudoEmitter.emit(true);
      this._router.navigate(['/cliente']);
    } else 
    {
      this.mostrarConteudoEmitter.emit(false);
      this.usuarioLogado = false;
      alert('Usuario ou Senha incorreto')
    }
  }

  obterUsuarioLogado() 
  {
    return this.usuarioLogado;
  }

  obterPermissoesDoUsuario(rota: string) 
  {
    if (this.usuario[0].tipo === 'vendedor' && (rota === 'remover' || rota === 'editar')) 
    {
      return false

    } else 
    {
      return true;
    }
  }
}
