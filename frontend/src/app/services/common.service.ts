import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getIdFromToken(): Observable<string> {
    return this.http.post<any>(
      'http://localhost:8080/getUser', {},
       httpOptions
      )
  }
}

// headers: new HttpHeaders({ "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem("token") })