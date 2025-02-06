import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testing-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './testing-custom-input.component.html',
  styleUrl: './testing-custom-input.component.scss',
})
export class TestingCustomInputComponent {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''], // This will be bound to the custom input component
    });
  }

  onSubmit() {
    console.log(this.form.value); // This will log the value of the form, including your custom control's value
  }
}
