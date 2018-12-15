import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedEmployeesComponent } from './sorted-employees.component';

describe('SortedEmployeesComponent', () => {
  let component: SortedEmployeesComponent;
  let fixture: ComponentFixture<SortedEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
