import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({}); // mock initialization

  // utilize dependency injection (ex: to get FormBuilder instance and use it to create the form (Angular way for dependency injection))
  constructor(
    private readonly fb: FormBuilder,
    private readonly reservationService: ReservationService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })
    
    let reservationId = this.activatedRoute.snapshot.paramMap.get('id'); // activatedRoute is used to get the current route information
    if (reservationId) {

        this.reservationService.getReservation(reservationId).subscribe(reservation => {
          if (reservation) {
            this.reservationForm.patchValue(reservation);
          }
        });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      
      // since the name of properties in the form group and the Reservation interface are the same, we can directly assign the form value to a Reservation object
      let reservation : Reservation = this.reservationForm.value;

      let reservationId = this.activatedRoute.snapshot.paramMap.get('id'); // activatedRoute is used to get the current route information
      if (reservationId) {
        this.reservationService.updateReservation(reservationId, reservation).subscribe(() => {
          alert('Reservation updated successfully!');
        });
      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          alert('Reservation created successfully!');
        });
      }

      this.reservationForm.reset();
      this.router.navigate(['/list']);
    }
  }

}
