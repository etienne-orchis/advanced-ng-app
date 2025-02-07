import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'advance-ng-app';
  routes: { routerLink: string; label: string }[] = [
    { routerLink: '/reactive-form/form-group', label: 'Form Group' },
    {
      routerLink: '/reactive-form/nested-form',
      label: 'Nested Form with Form Array',
    },
    {
      routerLink: '/reactive-form/async-custom-group',
      label: 'Custom & Async Validator',
    },
    { routerLink: 'custom-form-control', label: 'Custom Form Control' },
    { routerLink: 'content-projection', label: 'Content Projection' },
    { routerLink: 'ng-template', label: 'Ng Template' },
  ];
}
