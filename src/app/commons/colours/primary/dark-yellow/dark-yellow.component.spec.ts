import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkYellowComponent } from './dark-yellow.component';

describe('DarkYellowComponent', () => {
  let component: DarkYellowComponent;
  let fixture: ComponentFixture<DarkYellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkYellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
