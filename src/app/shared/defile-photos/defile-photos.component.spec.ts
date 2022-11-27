import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefilePhotosComponent } from './defile-photos.component';

describe('DefilePhotosComponent', () => {
  let component: DefilePhotosComponent;
  let fixture: ComponentFixture<DefilePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefilePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefilePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
