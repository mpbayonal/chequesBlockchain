import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleChequeTablaComponent } from './detalle-cheque-tabla.component';

describe('DetalleChequeTablaComponent', () => {
  let component: DetalleChequeTablaComponent;
  let fixture: ComponentFixture<DetalleChequeTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleChequeTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleChequeTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
