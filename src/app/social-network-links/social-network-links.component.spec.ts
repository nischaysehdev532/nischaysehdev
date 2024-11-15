import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkLinksComponent } from './social-network-links.component';

describe('SocialNetworkLinksComponent', () => {
  let component: SocialNetworkLinksComponent;
  let fixture: ComponentFixture<SocialNetworkLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetworkLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworkLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
