import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-user',
  templateUrl: './formbuilder-user.component.html',
  styleUrls: ['./formbuilder-user.component.scss'],
})
export class FormbuilderUserComponent implements OnInit {
  users: any[] = [
    {
      lastName: 'Du Tchad',
      firstName: 'Marboulin',
      email: 'maboulou.tchad@yopmail.com',
      company: 'YOLO Sarl',
      phone: '06 01 01 01 01',
    },
  ];

  user: FormGroup = this.formBuilder.group({
    lastName: ['', Validators.minLength(2)],
    firstName: ['', Validators.minLength(2)],
    email: ['', [Validators.required, Validators.email]],
    company: ['', Validators.minLength(2)],
    phone: ['', [Validators.minLength(10), Validators.pattern('[- +()0-9]+')]],
  });

  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addUser(): void {
    this.users.push(this.user.value);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.user.valid) {
      console.log(this.user.value);

      this.addUser();
    } else {
      console.log('Invalide');
    }
  }

  get form() {
    return this.user.controls;
  }
}
