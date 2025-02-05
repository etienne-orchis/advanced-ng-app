import { Routes } from '@angular/router';
import { FormGroupComponent } from './components/reactive-form/form-group/form-group.component';
import { AsyncCustomValidatorComponent } from './components/reactive-form/async-custom-validator/async-custom-validator.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reactive-form/form-group', pathMatch: 'full' },
  { path: 'reactive-form/form-group', component: FormGroupComponent },
  { path: 'reactive-form/async-custom-group', component: AsyncCustomValidatorComponent },
];
