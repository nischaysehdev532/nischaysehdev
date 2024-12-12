import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreAboutProjectComponent } from './learn-more-about-project.component';

describe('LearnMoreAboutProjectComponent', () => {
  let component: LearnMoreAboutProjectComponent;
  let fixture: ComponentFixture<LearnMoreAboutProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMoreAboutProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMoreAboutProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
