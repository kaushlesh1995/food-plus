import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecarogelComponent } from './homecarogel.component';

describe('HomecarogelComponent', () => {
  let component: HomecarogelComponent;
  let fixture: ComponentFixture<HomecarogelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecarogelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecarogelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
