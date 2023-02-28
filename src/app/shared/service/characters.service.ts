import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private charactersUrl: string = 'https://hp-api.onrender.com/'
  private charactersApi: string = 'api/characters'
  constructor(private http: HttpClient) {  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.charactersUrl}${this.charactersApi}`)
  }
}
