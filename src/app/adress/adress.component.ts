import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaceholderService } from '../services/placeholder.service';

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

  hasUnitNumber = false;

  states = [];

  constructor(
    private fb: FormBuilder,
    private placeholderService: PlaceholderService
  ) { }

  ngOnInit(): void {
    this.placeholderService.getUser(1).subscribe(user => {
      this.addressForm.controls.name.setValue(user.name);
    });
  }
  onSubmit() {
    alert('Thanks!');
    this.addressForm.controls.company.setValue("holaa jaja")
  }
}
