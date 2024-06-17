import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentResultComponent } from './experiment-result.component';

describe('ExperimentResultComponent', () => {
  let component: ExperimentResultComponent;
  let fixture: ComponentFixture<ExperimentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
