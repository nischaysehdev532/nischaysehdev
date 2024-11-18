import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageDescriptionComponent } from './front-page-description.component';

describe('FrontPageDescriptionComponent', () => {
  let component: FrontPageDescriptionComponent;
  let fixture: ComponentFixture<FrontPageDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontPageDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
