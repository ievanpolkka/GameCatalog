import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HomePageComponent } from "./home-page/home-page.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomePageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingSPA';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateFavicon(event.urlAfterRedirects);
      });
  }

  updateFavicon(url: string): void {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (!favicon) return;

    let iconPath = 'assets/icons/default.png';

    // Заменяй маршруты и пути к иконкам под себя
    if (url === '/') {
      iconPath = 'assets/icons/HomeIcon-modified.png';
    } else if (url === '/games') {
      iconPath = 'assets/icons/FileIcon-modified.png';
    } else if (url === '/about') {
      iconPath = 'assets/icons/aboutIcon-modified.png';
    }
    else if (url === '/contact') {
      iconPath = 'assets/icons/phoneicon-modified.png';
    }
    favicon.href = iconPath;
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 700,
      once: true, // Анимация будет выполнена только один раз
      easing: 'ease-in-out', // Плавность анимации
    });
  }
  
}

declare var AOS: any;
