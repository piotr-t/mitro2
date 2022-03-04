import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMitroComponent } from './form-mitro.component';

describe('FormMitroComponent', () => {
  let component: FormMitroComponent;
  let fixture: ComponentFixture<FormMitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
