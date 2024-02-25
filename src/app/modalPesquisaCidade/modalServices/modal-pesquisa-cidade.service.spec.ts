import { TestBed } from '@angular/core/testing';
import { ModalPesquisaCidadeService } from './modal-pesquisa-cidade.service';



describe('SharedService', () => {
  let service: ModalPesquisaCidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPesquisaCidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
