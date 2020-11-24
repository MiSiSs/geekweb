import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvmComponent } from './mvm.component';

describe('MvmComponent', () => {
  let component: MvmComponent;
  let fixture: ComponentFixture<MvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
