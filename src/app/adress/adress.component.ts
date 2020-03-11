import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaceholderService } from '../services/placeholder.service';
import { Router, Routes, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {
  userForm = this.fb.group({
    name: [''],
    username: [''],
    email: [''],
    addressStreet: [''],
    phone: [''],
    website: [''],
    companyName: ['']
  });

  userId: number;
  userName: string;
  editing: boolean;

  hasUnitNumber = false;

  states = [];

  constructor(
    private fb: FormBuilder,
    private placeholderService: PlaceholderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.loadUser();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let formData = JSON.stringify(this.userForm.value);
    if (this.editing) {
      this.placeholderService.editUser(formData, this.userId).subscribe(success => {
        if (typeof success.id == 'undefined') {
          alert('User edit failed');
        } else {
          alert('User edited successfully');
        }
      });
    } else {
      this.placeholderService.addUser(formData).subscribe(success => {
        if (typeof success.id == 'undefined') {
          alert('User insert failed');
        } else {
          alert('User added successfully');
        }
      });
    }
  }

  loadUser(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {

      let userIdTmp = this.activatedRoute.snapshot.paramMap.get('id');

      if (userIdTmp != null) {
        this.userId = parseInt(userIdTmp);
        this.placeholderService.getUser(this.userId).subscribe(user => {
          this.userForm.controls.name.setValue(user.name);
          this.userForm.controls.username.setValue(user.username);
          this.userForm.controls.email.setValue(user.email);
          this.userForm.controls.addressStreet.setValue(user.address.street);
          this.userForm.controls.phone.setValue(user.phone);
          this.userForm.controls.website.setValue(user.website);
          this.userForm.controls.companyName.setValue(user.company.name);
          this.userName = user.name;
        });
        this.editing = true;
      } else {
        this.editing = false;
      }
    });
  }

  goBack(): void {
    this._location.back();
  }
}
