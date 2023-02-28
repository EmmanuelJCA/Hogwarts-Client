import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmissionRequest } from 'src/app/shared/model/admissionRequest';
import { AdmissionRequestService } from 'src/app/shared/service/admissionRequests.service';

@Component({
  selector: 'app-admission-request-details',
  templateUrl: './admission-request-details.component.html',
  styleUrls: ['./admission-request-details.component.css']
})
export class AdmissionRequestDetailsComponent {
  id: number
  loading: boolean = false

  admissionRequest!: AdmissionRequest

  constructor(private _admissionRequestService: AdmissionRequestService, private aRoute: ActivatedRoute) { 
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.getAdmissionRequest()
  }

  getAdmissionRequest() {
    this.loading = true
    this._admissionRequestService.getAdmissionRequest(this.id).subscribe( data => {
      this.admissionRequest = data
      this.loading = false
      
    })
  }
}
