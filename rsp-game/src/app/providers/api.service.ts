import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  addOptions(options: Array<string>): Observable<any> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url: string = "https://shift-winter-2023-backend.onrender.com/api/rsp/option";

    let body = { "options": options }

    return this.httpClient.post(url, body, { headers });
  }

}
