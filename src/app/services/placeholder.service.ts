import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  constructor(private httpClient: HttpClient) { }
  async getUsers(): Promise <User[]> {
    let users = await this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    ).toPromise();

    return users;
  }
  getUsersAlt(): Observable <User[]> {
    let observableUsers = this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );

    return observableUsers;
  }
}
