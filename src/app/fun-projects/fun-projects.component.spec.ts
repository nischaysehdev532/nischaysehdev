import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunProjectsComponent } from './fun-projects.component';

describe('FunProjectsComponent', () => {
  let component: FunProjectsComponent;
  let fixture: ComponentFixture<FunProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
