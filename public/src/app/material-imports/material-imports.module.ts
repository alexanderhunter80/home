import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatIconModule,
  MatToolbarModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
