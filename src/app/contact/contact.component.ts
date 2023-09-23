import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {}; // Initialize an empty object to store form data

  submitForm() {
    // Here, you can handle the form submission logic, such as sending the data to a server.
    // For this example, we'll simply log the form data to the console.
    console.log(this.formData);

    // You can add your own logic here to send the form data to a server, e.g., using HttpClient.
    // For demonstration purposes, we'll assume a successful submission and reset the form.
    this.resetForm();
  }
  resetForm() {
    // Reset the form data after submission
    this.formData = {};
  }

}
