import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  seconde: number;
 constructor() {}

 ngOnInit() {
    // const counter = Observable.interval(1000);
    // counter.suscribe(
    //   (value: number) => {
    //     this.seconde = value;
    //   },
    //   (error: any) => {
    //     console.log("Une erreur a ete rencontree");
    //   },
    //   () => {
    //     console.log("Observable complete");
    //   }
    // );
 }

}
