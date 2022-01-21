import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  handleError: any;

  constructor(private http: HttpClient) {

  }
  //retrieving contact service
  getContacts() {
    return this.http.get<Contact>('http://localhost:3000/api/contacts').pipe(map(res => res));
  }

  //add contact
  addContact(newContact: Contact) {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');

    return this.http.post('http://localhost:3000/api/contacts', newContact, { headers: headers })
      .pipe(map(res => res));
  }


  //delete contact
  deleteContact(id: string) {
    return this.http.delete('http://localhost:3000/api/contacts/' + id)
      .pipe(map(res => res));
  }
}
