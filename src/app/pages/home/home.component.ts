import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    const options = {
      stringsElement: '#typed-strings',
      strings: ['Training banking juros amigos', 'Peça a portabilidade e venha ser Training banking hoje mesmo', 'Inovavdor, digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 500,
      loop: true
    };

    new Typed('.typing-element', options);

  }

  cadastroCliente() {
    this.router.navigate(['cadastro']);
   }

}
