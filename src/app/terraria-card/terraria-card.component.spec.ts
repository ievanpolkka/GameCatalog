import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariaCardComponent } from './terraria-card.component';

describe('TerrariaCardComponent', () => {
  let component: TerrariaCardComponent;
  let fixture: ComponentFixture<TerrariaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerrariaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrariaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
