import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrupComponent } from './form-grup.component';

describe('FormGrupComponent', () => {
  let component: FormGrupComponent;
  let fixture: ComponentFixture<FormGrupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGrupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
