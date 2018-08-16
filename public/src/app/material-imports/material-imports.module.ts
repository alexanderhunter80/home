import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatIconModule,
  MatToolbarModule,
  MatTabsModule
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
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
