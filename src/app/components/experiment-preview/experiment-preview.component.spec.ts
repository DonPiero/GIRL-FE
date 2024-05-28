import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentPreviewComponent } from './experiment-preview.component';

describe('ExperimentPreviewComponent', () => {
  let component: ExperimentPreviewComponent;
  let fixture: ComponentFixture<ExperimentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
