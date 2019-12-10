import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-concluido',
  templateUrl: './cadastro-concluido.component.html',
  styleUrls: ['./cadastro-concluido.component.scss']
})
export class CadastroConcluidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.login();
  }

  login() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 10000);
  }
}
