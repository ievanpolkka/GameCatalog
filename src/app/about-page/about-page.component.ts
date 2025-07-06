import { Component } from '@angular/core';
import { AboutHeaderComponent } from "../about-header/about-header.component";
import { AboutContentComponent } from "../about-content/about-content.component";

@Component({
  selector: 'app-about-page',
  imports: [AboutHeaderComponent, AboutContentComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
