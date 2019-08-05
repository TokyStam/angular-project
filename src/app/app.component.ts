import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareilName1 = "ordinateur";
  appareilName2 = "Machiine a coudre";
  appareilName3 = "robo";
 isAuth = false;
}
