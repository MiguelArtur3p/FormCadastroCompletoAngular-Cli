import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cidade } from '../models/Cidade';
import { CidadeService } from '../cidadeServices/cidade.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';
import { ValidarInputsService } from '../../shared/sharedServices/validar-inputs.service';

@Component({
    selector: 'app-cidade-form',
    templateUrl: './cidade-form.component.html',
    styleUrl: './cidade-form.component.css',
})
export class CidadeFormComponent implements OnInit, IFormCanDeactivate 
{
    id: string | undefined;
    operacao: string | undefined;
    cidadeForm: FormGroup;
    cidade: Cidade | undefined;

    constructor(
        private _route: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _cidadeService: CidadeService,
        private _router: Router,
        private _validarInputs: ValidarInputsService
    ) 
    {
        this.cidadeForm = this._formBuilder.group
        ({
            id: [''],
            cidade: ['', Validators.required],
            estado: ['', Validators.required],
            ibge: ['', Validators.required],
        });
    }

    obterParametrosRota() 
    {
        this.id = this._route.snapshot.params['id'];
        this.operacao = this._route.snapshot.url[1].path;
    }

    redirecionarParaPesquisa() 
    {
        this._router.navigate(['/cidade']);
    }

    validar() 
    {
        if (this.cidadeForm.valid) 
        {
            return true;
        } 
        else 
        {
            alert('Preencha todos os campos');
            console.log('teste')
            return false;
        }
    }

    desativarInputs() 
    {
        if (this.operacao == 'detalhes' || this.operacao == 'remover') 
        {
            this.cidadeForm.disable();
        }
    }

    mostrarCidade() 
    {
        if (!this.cidade) return;
        this.cidadeForm.patchValue(this.cidade);
    }

    criarCidade() 
    {
        if (!this.validar()) return;
        this.cidade = Object.assign({}, this.cidadeForm.value);
    }

    adicionar() 
    {
        this.criarCidade();
        if (!this.cidade) return;
        this._cidadeService.adicionar(this.cidade);
        this.redirecionarParaPesquisa();
    }

    editar() 
    {
        this.criarCidade();
        if (!this.cidade) return;
        this._cidadeService.editar(this.cidade);
        this.redirecionarParaPesquisa();
    }

    remover() 
    {
        if (!this.id) return;
        this._cidadeService.remover(this.id);
        this.redirecionarParaPesquisa();
    }

    desativarRota(): boolean 
    {
        if (this.cidadeForm.dirty) 
        {
            return false
        } 
        else 
        {
            this._validarInputs.verificarValidacoesForm(this.cidadeForm)
            alert('Preencha todos os campos obrigatório')
            return true
        }
        
    }

    aplicarCssCamposInvalidos(campo: string)
    {
        return this._validarInputs.aplicaCssErro(this.cidadeForm,campo)
    }
    
    verificarCampoInvalid(campo: string)
    { 
        return this._validarInputs.verificarValidTouch(this.cidadeForm,campo)
    }

    async ngOnInit() 
    {
        this.obterParametrosRota();
        if (this.operacao == 'adicionar' || !this.id) return;
        this.cidade = await this._cidadeService.obterCidadePorId(this.id);
        this.desativarInputs();
        this.mostrarCidade();
    }
}
