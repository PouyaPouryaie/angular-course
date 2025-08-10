import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  
  // define a property for class
  // appointment: string = 'take dog for a walk';

  appointment: Appointment = {
    id: 1,
    title: 'take dog for a walk',
    date: new Date('2025-08-10')
  }
}
