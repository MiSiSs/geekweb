import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncursionesComponent } from './incursiones.component';

describe('IncursionesComponent', () => {
  let component: IncursionesComponent;
  let fixture: ComponentFixture<IncursionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncursionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncursionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
