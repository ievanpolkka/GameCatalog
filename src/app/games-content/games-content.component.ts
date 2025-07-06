import { Component } from '@angular/core';
import { MinecraftCardComponent } from "../minecraft-card/minecraft-card.component";
import { CounterStrike2CardComponent } from "../counter-strike2-card/counter-strike2-card.component";
import { TerrariaCardComponent } from "../terraria-card/terraria-card.component";

@Component({
  selector: 'app-games-content',
  imports: [MinecraftCardComponent, CounterStrike2CardComponent, TerrariaCardComponent],
  templateUrl: './games-content.component.html',
  styleUrl: './games-content.component.css'
})
export class GamesContentComponent {

}
