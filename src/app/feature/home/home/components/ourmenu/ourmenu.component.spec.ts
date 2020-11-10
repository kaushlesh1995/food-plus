import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmenuComponent } from './ourmenu.component';

describe('OurmenuComponent', () => {
  let component: OurmenuComponent;
  let fixture: ComponentFixture<OurmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
