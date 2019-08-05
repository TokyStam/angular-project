import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
appareils: any[];
constructor( private appareilService: AppareilService){}

ngOnInit(){
  this.appareils = this.appareilService.appareils; 
}

allumerTout(){
 this.appareilService.switchOnAll();
 console.log("alumer");
}

eteindreTout(){
  this.appareilService.switchOffAll();
  console.log("eteindre");
}


}
