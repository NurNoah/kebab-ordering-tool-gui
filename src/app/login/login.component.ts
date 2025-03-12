import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../auth.service';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(public auth: AuthService, public ds: DarkmodeService){}

  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.ds.toggleDarkmode()
    } 
  }

}
