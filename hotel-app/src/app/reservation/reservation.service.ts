import { Injectable } from '@angular/core'; 
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {
    const savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  reservations: Reservation[] = [];

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    // reservation.id = (this.reservations.length + 1).toString();
    reservation.id = Date.now().toString(); // better approach
    this.reservations.push(reservation);
    this.saveToLocalStorage();
  }

  updateReservation(id: string, updatedRes: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      updatedRes.id = id; // ensure the id remains unchanged
      this.reservations[index] = updatedRes;
    }
    this.saveToLocalStorage();
  }

  deleteReservation(id: string): void {
    // this.reservations = this.reservations.filter(res => res.id !== id);
    // this.saveToLocalStorage();

    // second apporach
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

}
