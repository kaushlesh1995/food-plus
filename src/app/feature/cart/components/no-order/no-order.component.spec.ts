import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOrderComponent } from './no-order.component';

describe('NoOrderComponent', () => {
  let component: NoOrderComponent;
  let fixture: ComponentFixture<NoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
