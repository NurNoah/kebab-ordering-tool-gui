import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, ScrollPanelModule, LoginComponent]
})
export class AppComponent {
  title = 'D-Bestell-Tool-Front-end';
}
