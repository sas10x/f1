import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeErrorComponent } from './employee-error.component';

describe('EmployeeErrorComponent', () => {
  let component: EmployeeErrorComponent;
  let fixture: ComponentFixture<EmployeeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
