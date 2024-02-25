import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarInputsService {

    verificarValidacoesForm(form: any)
    {
        Object.keys(form.controls).forEach(campo =>
        {
            const controle = form.get(campo);
            controle.markAsDirty();
        })
    }

    verificarValidTouch(form: any , campo: string)
    {
        return !form.get(campo).valid && (form.get(campo).touched || form.get(campo).dirty)
    }

    verificarEmailInvalido(form: any)
    {
        let campoEmail=form.get('email');
        if(campoEmail.errors)
        {
            return campoEmail.errors['email'] && campoEmail.touched
        }
    }

    aplicaCssErro(form: any, campo: string)
    {
        return {'is-invalid': this.verificarValidTouch(form,campo)}
    }
}
