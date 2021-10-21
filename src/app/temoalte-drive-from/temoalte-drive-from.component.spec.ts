import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoalteDriveFromComponent } from './temoalte-drive-from.component';

describe('TemoalteDriveFromComponent', () => {
  let component: TemoalteDriveFromComponent;
  let fixture: ComponentFixture<TemoalteDriveFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemoalteDriveFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoalteDriveFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
