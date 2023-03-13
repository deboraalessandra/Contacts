import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorConfirmationComponent } from './error-confirmation.component';

describe('ErrorConfirmationComponent', () => {
  let component: ErrorConfirmationComponent;
  let fixture: ComponentFixture<ErrorConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
