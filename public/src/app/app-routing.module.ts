import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { ResumeComponent } from './resume/resume.component';

// ditch this for production
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'testdashboard', component: TestDashboardComponent},
  { path: '', pathMatch: 'full', redirectTo: '/splash' },
  { path: '**', redirectTo: '/splash' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
