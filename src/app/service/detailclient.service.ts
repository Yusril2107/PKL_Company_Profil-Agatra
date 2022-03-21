import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailclientService {
  api: string = environment.apiUrl + 'client';
  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get(url);
  }

  getDetailclientById(id: any) {
    return this.http.get(this.api + '/' + id);
  }
}
