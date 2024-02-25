import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCidadeModalComponent } from './pesquisa-cidade-modal.component';

describe('PesquisaCidadeModalComponent', () => {
  let component: PesquisaCidadeModalComponent;
  let fixture: ComponentFixture<PesquisaCidadeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PesquisaCidadeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesquisaCidadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
