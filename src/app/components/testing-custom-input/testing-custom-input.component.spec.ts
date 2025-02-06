import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCustomInputComponent } from './testing-custom-input.component';

describe('TestingCustomInputComponent', () => {
  let component: TestingCustomInputComponent;
  let fixture: ComponentFixture<TestingCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingCustomInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
