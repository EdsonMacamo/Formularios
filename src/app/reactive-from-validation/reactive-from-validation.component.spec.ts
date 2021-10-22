import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromValidationComponent } from './reactive-from-validation.component';

describe('ReactiveFromValidationComponent', () => {
  let component: ReactiveFromValidationComponent;
  let fixture: ComponentFixture<ReactiveFromValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFromValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFromValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
