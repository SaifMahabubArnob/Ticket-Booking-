import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // By default, the bus form is hidden
  isBusFormVisible = false;

  // Function to show the bus booking form when the button is clicked
  showForm(form: string) {
    if (form === 'bus') {
      // Toggle the visibility of the form
      this.isBusFormVisible = !this.isBusFormVisible;
    }
  }
}


