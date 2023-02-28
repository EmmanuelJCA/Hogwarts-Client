import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { House } from '../model/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private hogwartsUrl: string = environment.endpoint
  private HouseApi: string = 'api/House/'

  constructor(private http: HttpClient) {  }

  getHouses() : Observable<House[]> {
    return this.http.get<House[]>(`${this.hogwartsUrl}${this.HouseApi}`)
  }
}
