import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {}

    name: string = "";
    surname: string = "";

  ngOnInit() {
    this.name = "Katsiaryna";
    this.surname = "Kananchuk";
  }

}
