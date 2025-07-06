import { Component } from '@angular/core';
import { HomeHeadingComponent } from "../home-heading/home-heading.component";
import { HomeContentComponent } from "../home-content/home-content.component";

@Component({
  selector: 'app-home-page',
  imports: [HomeHeadingComponent, HomeContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
