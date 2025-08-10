import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  // define a property for class
  // appointment: string = 'take dog for a walk';

  // appointment: Appointment = {
  //   id: 1,
  //   title: 'take dog for a walk',
  //   date: new Date('2025-08-10')
  // }

  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    // load appointments from localStorage
    let storedAppointments = localStorage.getItem("appointments");
  
    this.appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
  }

  addAppointment() {
    
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(app => app.id !== id);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

  deleteAppointmentWithIndex(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

}
