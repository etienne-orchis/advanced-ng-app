import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.min(12), Validators.pattern('^[0-9]*$')]], // numbers only
      rememberMe: [true],
    });
  }

  handleSubmit() {
    const formValue = this.signUpForm.value;
    const isFormValid = this.signUpForm.valid;
    console.log('isFormValid :>> ', isFormValid);

    if (!isFormValid) {
      return;
    }
    console.log('formValue :>> ', formValue);
  }
}
