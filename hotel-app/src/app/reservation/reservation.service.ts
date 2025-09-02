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
    this.reservations.push(reservation);
    this.saveToLocalStorage();
  }

  updateReservation(updatedRes: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedRes.id);
    if (index !== -1) {
      this.reservations[index] = updatedRes;
    }
    this.saveToLocalStorage();
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter(res => res.id !== id);
    this.saveToLocalStorage();

    // second apporach
    //let index = this.reservations.findIndex(res => res.id === id);
    //this.reservations.splice(index, 1);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

}
