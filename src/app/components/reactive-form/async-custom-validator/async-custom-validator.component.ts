import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersValidator } from '../../../validators/users.validator';

@Component({
  selector: 'app-async-custom-validator',
  imports: [],
  templateUrl: './async-custom-validator.component.html',
  styleUrl: './async-custom-validator.component.scss',
})
export class AsyncCustomValidatorComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly usersValidator: UsersValidator
  ) {}
}
