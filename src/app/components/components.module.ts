import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalNaoCadastradoComponent } from './modal-nao-cadastrado/modal-nao-cadastrado.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ModalNaoCadastradoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalNaoCadastradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [ModalNaoCadastradoComponent]
})
export class ComponentsModule { }
