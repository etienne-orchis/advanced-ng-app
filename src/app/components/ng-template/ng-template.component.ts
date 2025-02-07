import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [NgTemplateOutlet],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss',
})
export class NgTemplateComponent {
  friends = [
    {
      name: 'Alice',
      status: 'Online',
      avatar: 'https://i.pravatar.cc/50?img=1',
    },
    {
      name: 'Bob',
      status: 'Offline',
      avatar: 'https://i.pravatar.cc/50?img=2',
    },
  ];

  messages = [
    {
      name: 'Charlie',
      lastMessage: 'See you soon!',
      avatar: 'https://i.pravatar.cc/50?img=3',
    },
    {
      name: 'David',
      lastMessage: 'Meeting at 3 PM',
      avatar: 'https://i.pravatar.cc/50?img=4',
    },
  ];

  team = [
    { name: 'Eve', role: 'Designer', avatar: 'https://i.pravatar.cc/50?img=5' },
    {
      name: 'Frank',
      role: 'Developer',
      avatar: 'https://i.pravatar.cc/50?img=6',
    },
  ];
}
