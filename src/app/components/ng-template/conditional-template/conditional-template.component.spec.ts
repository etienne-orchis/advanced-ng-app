import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalTemplateComponent } from './conditional-template.component';

describe('ConditionalTemplateComponent', () => {
  let component: ConditionalTemplateComponent;
  let fixture: ComponentFixture<ConditionalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
