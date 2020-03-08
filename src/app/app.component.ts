import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];
 title ="hola hans"
  constructor(private phService: PlaceholderService) { }
  
  async ngOnInit() {
    this.phService.getUsersAlt().subscribe(users => this.users = users);
  }

  deleteFirst ():void {
    this.users.shift();
  }
  
}
