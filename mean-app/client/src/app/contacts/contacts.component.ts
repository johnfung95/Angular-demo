import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts!: any;
  contact!: Contact;
  first_name!: string;
  last_name!: string;
  phone!: string;

  constructor(private contactsService: ContactsService) {
  }
  /*
  subscribe smilar to promise and then function but deal with observables
  and callback the function when it is successful
  Observable is a representation of any set of values over any amount of time. This is the most basic building block of RxJS.
  */

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactsService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact);
        this.contactsService.getContacts()
          .subscribe(contacts => this.contacts = contacts);
      })
  }

  deleteContact(id: any) {
    var contacts = this.contacts;
    this.contactsService.deleteContact(id)
      .subscribe(data => {
        if (data == 1) {
          for (var i = 0; i < this.contacts.length; i++) {
            if (contacts[i]._id == id) {
              contacts.splice(i, 1);
            }
          }
        }
      })
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
}
