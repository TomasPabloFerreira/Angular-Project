import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBlueComponent } from './light-blue.component';

describe('LightBlueComponent', () => {
  let component: LightBlueComponent;
  let fixture: ComponentFixture<LightBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
