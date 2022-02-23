import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house.model";

const baseUrl = 'http://localhost:8080/houses';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(baseUrl);
  }

  get(id: any): Observable<House> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
