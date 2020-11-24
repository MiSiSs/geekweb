import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazmorraComponent } from './mazmorra.component';

describe('MazmorraComponent', () => {
  let component: MazmorraComponent;
  let fixture: ComponentFixture<MazmorraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazmorraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazmorraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
