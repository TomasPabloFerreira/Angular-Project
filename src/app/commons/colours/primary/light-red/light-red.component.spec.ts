import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightRedComponent } from './light-red.component';

describe('LightRedComponent', () => {
  let component: LightRedComponent;
  let fixture: ComponentFixture<LightRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
