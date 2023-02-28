import { TestBed } from '@angular/core/testing';

import { AdmissionRequestService } from './admissionRequests.service';

describe('AdmissionRequestService', () => {
  let service: AdmissionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
