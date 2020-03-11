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

  getUser(id: number): Observable <User> {
    let observableUsers = this.httpClient.get<User>(
      'https://jsonplaceholder.typicode.com/users/' + id,
    );
    return observableUsers;
  }

  addUser(userForm: string): Observable <any> {
    let success = this.httpClient.post<number>(
      'https://jsonplaceholder.typicode.com/users/',
      userForm,
    );
    return success;
  }

  editUser(userForm: string, id: number):Observable <any> {
    let success = this.httpClient.put<number>(
      'https://jsonplaceholder.typicode.com/users/' + id,
      userForm,
    );
    return success;
  }
}
