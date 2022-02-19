import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BanerComponent } from './baner.component';

describe('BanerComponent', () => {
  let component: BanerComponent;
  let fixture: ComponentFixture<BanerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
