import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeawayConfirmationComponent } from './takeaway-confirmation.component';

describe('TakeawayConfirmationComponent', () => {
  let component: TakeawayConfirmationComponent;
  let fixture: ComponentFixture<TakeawayConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeawayConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeawayConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
