import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatIconModule
 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
