import { Component, OnInit } from '@angular/core';

import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faAddressBook = faAddressBook;

  constructor() { }

  ngOnInit() {
  }

}
