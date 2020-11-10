import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebbarComponent } from './webbar.component';

describe('WebbarComponent', () => {
  let component: WebbarComponent;
  let fixture: ComponentFixture<WebbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
