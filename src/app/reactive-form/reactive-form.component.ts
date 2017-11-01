import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string;
  name: string;
  nameError = 'Name is required';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(255)])],
      'validate': false
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === true) {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(5)]);
          this.nameError = 'Name is required and must be at least 5 characters';
        } else {
          this.rForm.get('name').setValidators([Validators.required]);
          this.nameError = 'Name is required';
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
}
