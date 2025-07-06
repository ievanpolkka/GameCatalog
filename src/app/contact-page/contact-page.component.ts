import { Component } from '@angular/core';
import { ContactHeaderComponent } from "../contact-header/contact-header.component";
import { ContactContentComponent } from "../contact-content/contact-content.component";

@Component({
  selector: 'app-contact-page',
  imports: [ContactHeaderComponent, ContactContentComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
