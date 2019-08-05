import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appreil-view',
  templateUrl: './appreil-view.component.html',
  styleUrls: ['./appreil-view.component.scss']
})
export class AppreilViewComponent implements OnInit {
appareils: any[];
constructor( private appareilService: AppareilService) {}

ngOnInit() {
  this.appareils = this.appareilService.appareils; 
}

allumerTout() {
 this.appareilService.switchOnAll();
}

eteindreTout() {
  this.appareilService.switchOffAll();
}


}
