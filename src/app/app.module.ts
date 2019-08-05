
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
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppreilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  {path: 'auth', component: AuthComponent},
  { path: '', component: AppreilViewComponent},
  { path: 'not-found', component: ErrorComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppreilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    