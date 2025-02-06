import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  imports: [ReactiveFormsModule],
  templateUrl: './nested-form.component.html',
  styleUrl: './nested-form.component.scss',
})
export class NestedFormComponent {
  myForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
