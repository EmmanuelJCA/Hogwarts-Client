import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRequestDetailsComponent } from './admission-request-details.component';

describe('AdmissionRequestDetailsComponent', () => {
  let component: AdmissionRequestDetailsComponent;
  let fixture: ComponentFixture<AdmissionRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
