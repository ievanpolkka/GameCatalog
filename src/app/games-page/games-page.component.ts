import { Component } from '@angular/core';
import { GamesContentComponent } from "../games-content/games-content.component";
import { GamesHeaderComponent } from "../games-header/games-header.component";

@Component({
  selector: 'app-games-page',
  imports: [GamesContentComponent, GamesHeaderComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent {

}
