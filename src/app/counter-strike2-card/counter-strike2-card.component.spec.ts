import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStrike2CardComponent } from './counter-strike2-card.component';

describe('CounterStrike2CardComponent', () => {
  let component: CounterStrike2CardComponent;
  let fixture: ComponentFixture<CounterStrike2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterStrike2CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterStrike2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
