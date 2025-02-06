import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliSlotComponent } from './mutli-slot.component';

describe('MutliSlotComponent', () => {
  let component: MutliSlotComponent;
  let fixture: ComponentFixture<MutliSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MutliSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutliSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
