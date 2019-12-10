import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { HomeLogadaComponent } from './pages/home-logada/home-logada.component';
import { AuthService } from './services/auth.service';
import { CadastroConcluidoComponent } from './pages/cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './pages/acesso-negado/acesso-negado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroClienteComponent,
    HomeLogadaComponent,
    CadastroConcluidoComponent,
    AcessoNegadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
