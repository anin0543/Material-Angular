import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule, 
   MatTabsModule,
   MatTooltipModule,
   MatGridListModule


  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
      MatTabsModule,
      MatTooltipModule,
      MatGridListModule


  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTooltipModule,
    MatGridListModule
  ]
})
export class MaterialModule {}