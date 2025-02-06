import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusBookingService {

  private apiUrl = 'http://localhost:8084/api/busBookings';  // Spring API URL

  constructor(private http: HttpClient) { }

  createBooking(busBooking: any): Observable<any> {
    return this.http.post(this.apiUrl, busBooking);
  }

  getAllBookings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBookingById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateBooking(id: number, busBooking: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, busBooking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}



