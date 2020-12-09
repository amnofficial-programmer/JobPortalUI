import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterForgetPasswordComponent } from './recruiter-forget-password.component';

describe('RecruiterForgetPasswordComponent', () => {
  let component: RecruiterForgetPasswordComponent;
  let fixture: ComponentFixture<RecruiterForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterForgetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
