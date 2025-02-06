import { Component } from '@angular/core';
import { SingleSlotComponent } from '../child/single-slot/single-slot.component';
import { MultiSlotComponent } from '../child/multi-slot/multi-slot.component';

@Component({
  selector: 'app-parent',
  imports: [SingleSlotComponent, MultiSlotComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  onInputChange(event: Event | any) {
    console.log(event?.target?.value);
  }
}
