import { Component } from '@angular/core';
import { BusBookingService } from '../bus-booking.service';

@Component({
  selector: 'app-bus-booking-form',  // এটি কম্পোনেন্টটির HTML ট্যাগ নাম
  templateUrl: './bus-booking-form.component.html',  // কম্পোনেন্টের HTML টেমপ্লেট ফাইল
  styleUrls: ['./bus-booking-form.component.css']  // CSS স্টাইল ফাইল (যদি থাকে)
})
export class BusBookingFormComponent {

  bookingData = {
    fromLocation: '',
    toLocation: '',
    journeyDate: '',
    journeyTime: '',
    seats: 1,
    busClass: '',
    passengerName: '',
    phone: '',
    email: '',
    ageGroup: '',
    discountCode: '',
    fare: 0
  };

  constructor(private busBookingService: BusBookingService) { }

  onSubmit() {
    this.busBookingService.createBooking(this.bookingData).subscribe(response => {
      console.log('Booking successful:', response);
      alert('Booking successful!');
    }, error => {
      console.error('Error creating booking:', error);
      alert('Error creating booking.');
    });
  }
}







