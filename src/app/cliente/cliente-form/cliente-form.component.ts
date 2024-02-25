import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ClienteService } from '../clienteServices/cliente.service';
import { Cliente } from '../models/Cliente';
import { Cidade } from '../../cidade/models/Cidade';
import { CidadeService } from '../../cidade/cidadeServices/cidade.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

import { Subscription } from 'rxjs';
import { ValidarInputsService } from '../../shared/sharedServices/validar-inputs.service';
import { PesquisaCidadeModalComponent } from '../../modalPesquisaCidade/pesquisa-cidade-modal/pesquisa-cidade-modal.component';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrl: './cliente-form.component.css',
})
export class ClienteFormComponent implements OnInit, OnDestroy, IFormCanDeactivate 
{
    clienteForm: FormGroup;
    id: number | undefined;
    operacao!: string | null;
    cliente: Cliente | undefined;
    cidadeNaoEncontrada: boolean = false;
    idCidadeSelecionada: string | undefined;
    inscricao: Subscription | undefined

    @ViewChild('inputCidade', { static: false }) inputCidade!: ElementRef;
    @ViewChild('inputEstado', { static: false }) inputEstado!: ElementRef;
    @ViewChild('inputCodigoCidade', { static: false })
    inputCodigoCidade!: ElementRef;

    constructor(
        private _formBuilder: FormBuilder,
        private _clienteService: ClienteService,
        private _cidadeService: CidadeService,
        private _route: ActivatedRoute,
        private _router: Router,
        private dialog: MatDialog,
        private _validarInputs : ValidarInputsService
    ) 
    {
        this.clienteForm = this._formBuilder.group({
            id: [''],
            nomeCliente: ['', Validators.required],
            cpf: ['', Validators.required],
            dataNascimento: ['', Validators.required],
            codigoCidade: ['', Validators.required],
            pais: ['', Validators.required],
            endereco: ['', Validators.required],
            numeroCasa: ['', Validators.required],
            bairro: ['', Validators.required],
            numeroTelefone: ['', Validators.required],
            numeroCelular: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    obterParametrosRota() 
    {
        this.id = this._route.snapshot.params['id'];
        this.operacao = this._route.snapshot.url[1].path;
    }

    async obterCidade(id: string) 
    {
        let cidade = await this._cidadeService.obterCidadePorId(id)
        this.mostrarCidade(cidade);
    }

    mostrarCidade(cidade: Cidade) 
    {
        if (!cidade) 
        {
            this.cidadeNaoEncontrada = true;
            this.inputCidade.nativeElement.value = '';
            this.inputEstado.nativeElement.value = '';
        } 
        else 
        {
            this.cidadeNaoEncontrada = false;
            this.inputCidade.nativeElement.value = cidade.cidade;
            this.inputEstado.nativeElement.value = cidade.estado;
        }
    }

    mostrarCliente() 
    {
        if (!this.cliente) return;
        this.clienteForm.patchValue(this.cliente);
    }

    desativarInputs() 
    {
        if (this.operacao == 'detalhes' || this.operacao == 'remover') 
        {
            this.clienteForm.disable();
        }
    }

    validar() 
    {
        if (this.clienteForm.valid) 
        {
            return true;
        } 
        else 
        {
            this._validarInputs.verificarValidacoesForm(this.clienteForm)
            alert('Preencha todos os campos obrigatório');
            return false;
        }
    }

    redirecionarParaPesquisa() 
    {
        this._router.navigate(['/cliente']);
    }

    criarCliente() 
    {
        if (!this.validar()) return;
        this.cliente = Object.assign({}, this.clienteForm.value);
    }

    adicionar() 
    {
        this.criarCliente();
        if (!this.cliente) return;
        this._clienteService.adicionar(this.cliente);
        this.redirecionarParaPesquisa();
    }

    editar() 
    {
        this.criarCliente();
        if (!this.cliente) return;
        this._clienteService.editar(this.cliente);
        this.redirecionarParaPesquisa();
    }

    remover() 
    {
        if (!this.id) return;
        this._clienteService.remover(this.id);
        this.redirecionarParaPesquisa();
    }

    desativarRota(): boolean
    {
        if (this.clienteForm.dirty) 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    }

    openDialog() 
    {
        const dialogRef = this.dialog.open(PesquisaCidadeModalComponent);
        this._clienteService.emitirEventoAbrirModal(true);

        dialogRef.afterClosed().subscribe((result: any) => {
            this._clienteService.emitirEventoAbrirModal(false);
        });
    }

    definirIdCidade() 
    {
        if (!this.idCidadeSelecionada) return;
        this.obterCidade(this.idCidadeSelecionada)
        this.clienteForm.get('codigoCidade')?.setValue(this.idCidadeSelecionada);
        this.dialog.closeAll();
    }

    verificarCampoInvalid(campo: string)
    {
        return this._validarInputs.verificarValidTouch(this.clienteForm, campo);
    }

    verificarCampoEmail()
    {
        return this._validarInputs.verificarEmailInvalido(this.clienteForm)
    }

    aplicarCssCamposInvalidos(campo: string)
    {
        return this._validarInputs.aplicaCssErro(this.clienteForm, campo)
    }

    async ngOnInit() 
    {
        this.inscricao = this._cidadeService.idCidadeSelecionadaEmitter.subscribe(id => {
            this.idCidadeSelecionada = id;
            this.definirIdCidade();
        })
        this.obterParametrosRota();
        if (this.operacao == 'adicionar' || !this.id) return;
        this.cliente = await this._clienteService.obterClientePorId(this.id);
        this.mostrarCliente();
        this.obterCidade(this.inputCodigoCidade.nativeElement.value.toString());
        this.desativarInputs();

        // this.clienteForm.get('codigoCidade')?.valueChanges.subscribe(value=>console.log('value: '+value))
    }

    ngOnDestroy() 
    {
        this.inscricao?.unsubscribe();
    }
}
