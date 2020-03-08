import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightYellowComponent } from './light-yellow.component';

describe('LightYellowComponent', () => {
  let component: LightYellowComponent;
  let fixture: ComponentFixture<LightYellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightYellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
