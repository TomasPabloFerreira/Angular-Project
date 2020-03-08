import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryModule } from './primary/primary.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimaryModule,
  ],
  exports: [
    ColoursModule,
  ]
})
export class ColoursModule { }
