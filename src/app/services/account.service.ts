import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  onLogin(obj: any): Observable<any> {
    console.log('Login request data:', obj); // Debug log
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    
    // Format the request body according to API requirements
    const loginData = {
      email: obj.email,
      password: obj.password
    };
    
    console.log('Formatted login data:', loginData); // Debug log
    return this.http.post(`${this.baseUrl}/Account/ValidateUser`, loginData, { headers });
  }

  getDashboardData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.get(`${this.baseUrl}/OnlineTest/GetDashboardData`, { headers });
  }

  getCustomers(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.get(`${this.baseUrl}/Master/GetAllCustomer`, { headers });
  }

  uploadfile(obj: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post(`${this.baseUrl}/GetValet/uploadFile`, obj, { headers });
  }
}
