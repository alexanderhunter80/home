import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MaterializeModule } from "angular2-materialize";

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { SplashComponent } from './splash/splash.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { CodeSamplesComponent } from './codesamples/codesamples.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDashboardComponent,
    NavbarComponent,
    SplashComponent,
    ResumeComponent,
    ContactComponent,
    CodeSamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterializeModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
