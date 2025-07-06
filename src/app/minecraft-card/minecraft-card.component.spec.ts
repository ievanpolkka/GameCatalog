import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftCardComponent } from './minecraft-card.component';

describe('MinecraftCardComponent', () => {
  let component: MinecraftCardComponent;
  let fixture: ComponentFixture<MinecraftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinecraftCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinecraftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
