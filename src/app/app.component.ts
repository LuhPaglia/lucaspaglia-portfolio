import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'lucaspaglia-portfolio';
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
