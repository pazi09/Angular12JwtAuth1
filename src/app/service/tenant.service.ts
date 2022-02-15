import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tenant} from "../models/tenant.model";

const baseUrl = 'http://localhost:8080/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(baseUrl);
  }

  get(id: any): Observable<Tenant> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(name: any,secondname:any,lastname:any): Observable<any> {
    return this.http.post(baseUrl, {name,secondname,lastname});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
