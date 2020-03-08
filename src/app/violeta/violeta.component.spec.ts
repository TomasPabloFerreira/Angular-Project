import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VioletaComponent } from './violeta.component';

describe('VioletaComponent', () => {
  let component: VioletaComponent;
  let fixture: ComponentFixture<VioletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VioletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VioletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
