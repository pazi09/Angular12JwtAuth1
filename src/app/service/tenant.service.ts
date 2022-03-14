import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tenant} from "../models/tenant.model";
import {House} from "../models/house.model";

const baseUrl = 'http://localhost:8080/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) {}

  get(id: any): Observable<Tenant> {
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

  getByUser(): Observable<House> {
    return this.http.get(baseUrl);
  }
}
