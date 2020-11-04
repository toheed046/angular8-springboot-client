import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:4444/springboot-crud-rest/api/v1/employees';
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createEmployee(value: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, value);
  }

  updateEmployee(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
  
}
