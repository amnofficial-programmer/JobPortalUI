import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacraxModalComponent } from './macrax-modal.component';

describe('MacraxModalComponent', () => {
  let component: MacraxModalComponent;
  let fixture: ComponentFixture<MacraxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacraxModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacraxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
