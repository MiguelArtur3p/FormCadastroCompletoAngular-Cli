import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    RouterStateSnapshot,
} from '@angular/router';
import { UsuarioService } from '../usuario/services/usuario.service';

export const permissoessGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    return inject(UsuarioService).obterPermissoesDoUsuario(route.url[1].path) ? true : confirm('Você não tem permissão para acessar essa pagina') ? false : false
};
