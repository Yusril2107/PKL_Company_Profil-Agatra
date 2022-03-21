import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  api: string = environment.apiUrl + 'blog';
  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get(url);
  }

  getDetailblogById(id: any) {
    return this.http.get(this.api + '/' + id);
  }

}
