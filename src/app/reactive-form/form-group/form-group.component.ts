import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  signUpForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      // Form Group
      username: [''], // Form Control
      password: [''], // Form Control
    });
  }

  handleSubmit() {
    const formValue = this.signUpForm.value;

    console.log('formValue :>> ', formValue);
  }
}
