import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { ResumeComponent } from './resume/resume.component';
import { CodeSamplesComponent } from './codesamples/codesamples.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent, data: { state: 'splash' } },
  { path: 'resume', component: ResumeComponent, data: { state: 'resume' } },
  { path: 'codesamples', component: CodeSamplesComponent, data: { state: 'resume' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: '', pathMatch: 'full', redirectTo: '/splash' },
  { path: 'home', pathMatch: 'full', redirectTo: '/splash' },
  { path: '**', redirectTo: '/splash' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
