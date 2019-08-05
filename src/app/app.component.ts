import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 appareils = [
   {
     name: 'oridinateur',
     status: 'on'
   },
   {
    name: 'telephone',
    status: 'off'
  },
  {
    name: 'oridinateur',
    status: 'on'
  }
 ];
}
