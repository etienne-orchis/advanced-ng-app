import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomFormControlComponent } from '../custom-form-control/custom-form-control.component';

@Component({
  selector: 'app-testing-custom-input',
  imports: [ReactiveFormsModule, CustomFormControlComponent],
  templateUrl: './testing-custom-input.component.html',
  styleUrl: './testing-custom-input.component.scss',
})
export class TestingCustomInputComponent {
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value); // This will log the value of the form, including your custom control's value
  }
}
