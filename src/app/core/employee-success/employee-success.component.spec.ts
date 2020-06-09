import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSuccessComponent } from './employee-success.component';

describe('EmployeeSuccessComponent', () => {
  let component: EmployeeSuccessComponent;
  let fixture: ComponentFixture<EmployeeSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
