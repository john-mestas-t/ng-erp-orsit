// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './app/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: '<app-dashboard></app-dashboard>'
})
export class App {}

bootstrapApplication(App);