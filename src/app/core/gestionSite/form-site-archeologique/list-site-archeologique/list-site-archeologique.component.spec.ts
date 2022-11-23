import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiteArcheologiqueComponent } from './list-site-archeologique.component';

describe('ListSiteArcheologiqueComponent', () => {
  let component: ListSiteArcheologiqueComponent;
  let fixture: ComponentFixture<ListSiteArcheologiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSiteArcheologiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiteArcheologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
