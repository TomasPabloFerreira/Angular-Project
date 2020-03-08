import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  MatListModule,
  
]

@NgModule({
  declarations: [

  ],
  imports: [...modules],
  exports: [...modules],
})
export class CommonsModule {

}
