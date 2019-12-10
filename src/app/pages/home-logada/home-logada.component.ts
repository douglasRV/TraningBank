import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.scss']
})
export class HomeLogadaComponent implements OnInit {
  cadastro;
  nameCliente;
  constructor() { }

  ngOnInit() {

    this.cadastro = JSON.parse(localStorage.getItem('cadastro'));
    
    if (this.cadastro != null) {

      this.nameCliente = this.cadastro['nome'];
      
    }
  }

}
