import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSvgComponent } from './start-svg.component';

describe('StartSvgComponent', () => {
  let component: StartSvgComponent;
  let fixture: ComponentFixture<StartSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
