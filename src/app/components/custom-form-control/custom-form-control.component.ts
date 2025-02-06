import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  imports: [FormsModule],
  templateUrl: './custom-form-control.component.html',
  styleUrl: './custom-form-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormControlComponent),
      multi: true
    }
  ]
})
export class CustomFormControlComponent implements ControlValueAccessor {
  @Input() label: string = ''; // Label input
  value: string = ''; // Internal value of the form control
  // The function to call when the value changes
  onChange: (value: any) => void = () => {};

  // The function to call when the form is touched
  onTouched: () => void = () => {};

  constructor() {}


  // Write the value to the input (from the form model)
  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  // Register a function to call when the value changes
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  // Register a function to call when the input is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Handle the change event in the input
  onInputChange() {
    this.onChange(this.value); // Notify Angular forms of the change
  }

  // Handle the blur event (touched state)
  onBlur() {
    this.onTouched(); // Notify Angular forms that the control was touched
  }
}
