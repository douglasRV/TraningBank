import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { HomeLogadaComponent } from './pages/home-logada/home-logada.component';
import { AuthGuard } from './guard/auth.guard';
import { CadastroConcluidoComponent } from './pages/cadastro-concluido/cadastro-concluido.component';
import { LoginComponent } from './components/login/login.component';
import { AcessoNegadoComponent } from './pages/acesso-negado/acesso-negado.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroClienteComponent},
  {path: 'home', component: HomeLogadaComponent, },
  {path: 'home-logada', component: HomeLogadaComponent, canActivate:[AuthGuard]},
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'acesso-negado', component: AcessoNegadoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
