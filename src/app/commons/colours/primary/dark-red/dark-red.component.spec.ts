import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkRedComponent } from './dark-red.component';

describe('DarkRedComponent', () => {
  let component: DarkRedComponent;
  let fixture: ComponentFixture<DarkRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
