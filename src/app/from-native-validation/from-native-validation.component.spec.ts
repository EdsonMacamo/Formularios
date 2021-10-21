import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNativeValidationComponent } from './from-native-validation.component';

describe('FromNativeValidationComponent', () => {
  let component: FromNativeValidationComponent;
  let fixture: ComponentFixture<FromNativeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromNativeValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromNativeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
