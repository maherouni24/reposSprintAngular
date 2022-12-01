import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreclamationComponent } from './allreclamation.component';

describe('AllreclamationComponent', () => {
  let component: AllreclamationComponent;
  let fixture: ComponentFixture<AllreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
