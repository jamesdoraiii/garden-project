import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproductspageComponent } from './adminproductspage.component';

describe('AdminproductspageComponent', () => {
  let component: AdminproductspageComponent;
  let fixture: ComponentFixture<AdminproductspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminproductspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproductspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
