
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppareilService} from './services/appareil.service';
import { AppreilViewComponent } from './appreil-view/appreil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes: Routes = [
  { path: 'appareils', component: AppreilViewComponent },
  {path: 'auth', component: AuthComponent},
  { path: '', component: AppreilViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppreilViewComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    