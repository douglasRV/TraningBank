import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNaoCadastradoComponent } from './modal-nao-cadastrado.component';

describe('ModalNaoCadastradoComponent', () => {
  let component: ModalNaoCadastradoComponent;
  let fixture: ComponentFixture<ModalNaoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNaoCadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNaoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
