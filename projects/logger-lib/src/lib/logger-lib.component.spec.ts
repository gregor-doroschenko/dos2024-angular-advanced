import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerLibComponent } from './logger-lib.component';

describe('LoggerLibComponent', () => {
  let component: LoggerLibComponent;
  let fixture: ComponentFixture<LoggerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
