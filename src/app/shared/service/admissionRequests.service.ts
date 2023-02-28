import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdmissionRequest } from '../model/admissionRequest';

@Injectable({
  providedIn: 'root'
})
export class AdmissionRequestService {
  private hogwartsUrl: string = environment.endpoint
  private admissionRequestsApi: string = 'api/AdmissionRequest/'

  constructor(private http: HttpClient) {  }

  addAdmissionRequest(admissionRequest: AdmissionRequest) : Observable<AdmissionRequest> {

    return this.http.post<AdmissionRequest>(`${this.hogwartsUrl}${this.admissionRequestsApi}`,
    admissionRequest)

  }

  updateAdmissionRequest(id: number, admissionRequest: AdmissionRequest): Observable<void> {
    return this.http.put<void>(`${this.hogwartsUrl}${this.admissionRequestsApi}${id}`,
    admissionRequest)
  }

  getAdmissionRequests() : Observable<AdmissionRequest[]> {
      return this.http.get<AdmissionRequest[]>(`${this.hogwartsUrl}${this.admissionRequestsApi}`)
  }

  getAdmissionRequest(id: number) : Observable<AdmissionRequest> {
    return this.http.get<AdmissionRequest>(`${this.hogwartsUrl}${this.admissionRequestsApi}${id}`)
  }

  deleteAdmissionRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.hogwartsUrl}${this.admissionRequestsApi}${id}`)
  }

}
