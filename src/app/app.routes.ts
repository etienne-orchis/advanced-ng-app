import { Routes } from '@angular/router';
import { FormGroupComponent } from './reactive-form/form-group/form-group.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reactive-form/form-group', pathMatch: 'full' },
  { path: 'reactive-form/form-group', component: FormGroupComponent },
];
