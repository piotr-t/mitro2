import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TelComponent } from './tel.component';

describe('TelComponent', () => {
  let component: TelComponent;
  let fixture: ComponentFixture<TelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
