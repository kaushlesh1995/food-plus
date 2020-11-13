import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakewayLocationComponent } from './takeway-location.component';

describe('TakewayLocationComponent', () => {
  let component: TakewayLocationComponent;
  let fixture: ComponentFixture<TakewayLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakewayLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakewayLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
