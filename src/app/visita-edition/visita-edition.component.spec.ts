import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaEditionComponent } from './visita-edition.component';

describe('VisitaEditionComponent', () => {
  let component: VisitaEditionComponent;
  let fixture: ComponentFixture<VisitaEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
