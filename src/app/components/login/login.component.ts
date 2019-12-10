import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalNaoCadastradoComponent } from '../modal-nao-cadastrado/modal-nao-cadastrado.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cadastro;

  constructor(private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      cpf: ''
    });

  }

  login() {

    this.cadastro = JSON.parse(localStorage.getItem('cadastro'));

    if (this.cadastro != null) {
      const cpfPersistido = this.cadastro['cpf'];
      console.log(cpfPersistido);

      const cpfDigitado = this.loginForm.get('cpf').value;

      if (cpfPersistido == cpfDigitado) {
        this.router.navigate(['home-logada']);
      } else {
        this.openDialog();
      }
    }


  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNaoCadastradoComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

} 
