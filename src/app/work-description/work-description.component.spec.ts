import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescriptionComponent } from './work-description.component';

describe('WorkDescriptionComponent', () => {
  let component: WorkDescriptionComponent;
  let fixture: ComponentFixture<WorkDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
