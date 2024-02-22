import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit 
{
  mostrarNavBar: boolean = false;
  title = 'Cadastro';
  constructor(private _loginService: UsuarioService) {}

  ngOnInit() 
  {
    this._loginService.mostrarConteudoEmitter.subscribe(
      (mostrar: boolean) => (this.mostrarNavBar = mostrar)
    );
  }
}
