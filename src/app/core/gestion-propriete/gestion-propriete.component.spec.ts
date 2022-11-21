import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProprieteComponent } from './gestion-propriete.component';

describe('GestionProprieteComponent', () => {
  let component: GestionProprieteComponent;
  let fixture: ComponentFixture<GestionProprieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProprieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
