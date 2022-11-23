import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSiteArcheologiqueComponent } from './form-site-archeologique.component';

describe('FormSiteArcheologiqueComponent', () => {
  let component: FormSiteArcheologiqueComponent;
  let fixture: ComponentFixture<FormSiteArcheologiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSiteArcheologiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSiteArcheologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
