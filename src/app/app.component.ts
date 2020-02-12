import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  buttonText = 'Presionar';
  inputValue = '';

  changeTitles():void {
    this.title = 'Nuevo nombre';
    this.buttonText = 'Me presionaste';
    this.inputValue = 'Nuevo valor';
  }

  showInputValue():void {
    console.log(this.inputValue);
  }
}
