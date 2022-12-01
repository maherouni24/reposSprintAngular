import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReclamComponent } from './get-reclam.component';

describe('GetReclamComponent', () => {
  let component: GetReclamComponent;
  let fixture: ComponentFixture<GetReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReclamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
