import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  public name: string = 'Katsiaryna';
  public surname: string = 'Kananchuk';

  constructor() { }

}
