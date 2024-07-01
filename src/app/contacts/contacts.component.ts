import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Here you can add any logic for handling the form data, such as sending it to a server
    console.log('Form submitted');
  }

}
