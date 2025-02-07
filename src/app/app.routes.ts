import { Routes } from '@angular/router';
import { FormGroupComponent } from './components/reactive-form/form-group/form-group.component';
import { AsyncCustomValidatorComponent } from './components/reactive-form/async-custom-validator/async-custom-validator.component';
import { NestedFormComponent } from './components/reactive-form/nested-form/nested-form.component';
import { TestingCustomInputComponent } from './components/testing-custom-input/testing-custom-input.component';
import { ParentComponent } from './components/content-projection/parent/parent.component';
import { ConditionalTemplateComponent } from './components/ng-template/conditional-template/conditional-template.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reactive-form/form-group', pathMatch: 'full' },
  {
    path: 'reactive-form/form-group',
    component: FormGroupComponent,
    pathMatch: 'full',
  },
  {
    path: 'reactive-form/async-custom-group',
    component: AsyncCustomValidatorComponent,
    pathMatch: 'full',
  },
  {
    path: 'reactive-form/nested-form',
    component: NestedFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'custom-form-control',
    component: TestingCustomInputComponent,
    pathMatch: 'full',
  },
  {
    path: 'content-projection/single-slot',
    component: ParentComponent,
    pathMatch: 'full',
  },
];
