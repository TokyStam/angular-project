import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  constructor(private appreilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    if(this.appareilStatus === 'on'){
      return 'green';
    }
      else if(this.appareilStatus === 'off'){
        return 'red';
      }
  }

  onSwitchOne(){
    this.appreilService.switchOnOn(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appreilService.switchOfOn(this.indexOfAppareil);
  }

}
