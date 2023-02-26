import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJogadorComponent } from './pagina-jogador.component';

describe('PaginaJogadorComponent', () => {
  let component: PaginaJogadorComponent;
  let fixture: ComponentFixture<PaginaJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
