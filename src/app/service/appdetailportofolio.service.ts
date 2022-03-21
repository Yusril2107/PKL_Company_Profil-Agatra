import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AppDetailportofolioService {
  api: string = environment.apiUrl + 'portfolio';

  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url);
  }
}
