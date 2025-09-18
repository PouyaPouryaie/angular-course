import { Injectable } from '@angular/core'; 
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:3001';
  reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservations/' + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservations", reservation);
  }

  updateReservation(id: string, updatedRes: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservations/" + id, updatedRes);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservtions/" + id);
  }

  deleteReservationOld(id: string): void {
    this.reservations = this.reservations.filter(res => res.id !== id);
    this.saveToLocalStorage();

    // second apporach
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    // this.saveToLocalStorage();
  }

  saveToLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

}
