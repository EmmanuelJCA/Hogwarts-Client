import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRequestsComponent } from './admission-requests.component';

describe('AdmissionRequestsComponent', () => {
  let component: AdmissionRequestsComponent;
  let fixture: ComponentFixture<AdmissionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
