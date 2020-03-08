import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red/red.component';
import { DarkRedComponent } from './dark-red/dark-red.component';
import { LightRedComponent } from './light-red/light-red.component';
import { BlueComponent } from './blue/blue.component';
import { DarkBlueComponent } from './dark-blue/dark-blue.component';
import { LightBlueComponent } from './light-blue/light-blue.component';
import { YellowComponent } from './yellow/yellow.component';
import { LightYellowComponent } from './light-yellow/light-yellow.component';
import { DarkYellowComponent } from './dark-yellow/dark-yellow.component';



@NgModule({
  declarations: [RedComponent, DarkRedComponent, LightRedComponent, BlueComponent, DarkBlueComponent, LightBlueComponent, YellowComponent, LightYellowComponent, DarkYellowComponent],
  imports: [
    CommonModule
  ]
})
export class PrimaryModule { }
