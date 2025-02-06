import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersValidator } from '../../../validators/users.validator';

@Component({
  selector: 'app-async-custom-validator',
  imports: [ReactiveFormsModule],
  templateUrl: './async-custom-validator.component.html',
  styleUrl: './async-custom-validator.component.scss',
})
export class AsyncCustomValidatorComponent {
  signUpForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly usersValidator: UsersValidator
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24),
        ],
        [this.usersValidator.userExistsValidator()], // async validator
      ],
      password: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.min(12), Validators.pattern('^[0-9]*$')]],
      rememberMe: [true],
    });
  }

  get usernameControl(): AbstractControl {
    return this.signUpForm.get('username') as AbstractControl;
  }

  get passwordControl(): AbstractControl {
    return this.signUpForm.get('password') as AbstractControl;
  }

  get ageControl(): AbstractControl {
    return this.signUpForm.get('age') as AbstractControl;
  }

  get rememberMeControl(): AbstractControl {
    return this.signUpForm.get('rememberMe') as AbstractControl;
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
