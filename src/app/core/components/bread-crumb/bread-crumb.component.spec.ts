import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBreadCrumbComponent } from './bread-crumb.component';

describe('AppBreadCrumbComponent', () => {
  let component: AppBreadCrumbComponent;
  let fixture: ComponentFixture<AppBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBreadCrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
