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
  addressForm = this.fb.group({
    name: [''],
    username: [''],
    email: [''],
    addressStreet: [''],
    phone: [''],
    website: [''],
    companyName: ['']
  });

  userId: number = -1;

  hasUnitNumber = false;

  states = [];

  constructor(
    private fb: FormBuilder,
    private placeholderService: PlaceholderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }
  onSubmit() {
    alert('Thanks!');
    this.addressForm.controls.company.setValue("holaa jaja")
  }

  loadUser(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {

      let userIdTmp = this.activatedRoute.snapshot.paramMap.get('id');

      if (userIdTmp != null) {
        this.userId = parseInt(userIdTmp);
        this.placeholderService.getUser(this.userId).subscribe(user => {
          this.addressForm.controls.name.setValue(user.name);
          this.addressForm.controls.username.setValue(user.username);
          this.addressForm.controls.email.setValue(user.email);
          this.addressForm.controls.addressStreet.setValue(user.address.street);
          this.addressForm.controls.phone.setValue(user.phone);
          this.addressForm.controls.website.setValue(user.website);
          this.addressForm.controls.companyName.setValue(user.company.name);
        });
      }

    });
  }

  goBack(): void {
    this._location.back();
  }
}
