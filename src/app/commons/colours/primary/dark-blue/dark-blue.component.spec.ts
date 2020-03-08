import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBlueComponent } from './dark-blue.component';

describe('DarkBlueComponent', () => {
  let component: DarkBlueComponent;
  let fixture: ComponentFixture<DarkBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
