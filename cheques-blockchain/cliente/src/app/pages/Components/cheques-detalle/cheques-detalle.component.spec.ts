import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesDetalleComponent } from './cheques-detalle.component';

describe('ChequesDetalleComponent', () => {
  let component: ChequesDetalleComponent;
  let fixture: ComponentFixture<ChequesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
