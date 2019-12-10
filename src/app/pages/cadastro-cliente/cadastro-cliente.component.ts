import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.cadastroForm = this.formBuilder.group({
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      endereco: '',
    })

  }

  onSubmit(){

    localStorage.setItem('cadastro', JSON.stringify(this.cadastroForm.value));

  }

}
