import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ 
    EffectsModule, 
    StoreModule 
  ],
})
export class NgrxModule {}