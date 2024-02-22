import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { IFormCanDeactivate } from "./iform-candeactivate";


export const canDeactivateForm : CanDeactivateFn<IFormCanDeactivate> = (component:IFormCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=> {
return component.desativarRota()? true : confirm('Tem certeza que deseja executar essa operação?')? true : false;

}