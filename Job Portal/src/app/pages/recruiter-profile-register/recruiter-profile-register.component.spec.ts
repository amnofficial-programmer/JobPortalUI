import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterProfileRegisterComponent } from './recruiter-profile-register.component';

describe('RecruiterProfileRegisterComponent', () => {
  let component: RecruiterProfileRegisterComponent;
  let fixture: ComponentFixture<RecruiterProfileRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterProfileRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterProfileRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
