import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DarkmodeService } from './darkmode.service';
import { ShopCardPopupServiceService } from './shop-card-popup-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Authenticated: boolean = false;

  constructor(public router: Router, public ds: DarkmodeService, public shop: ShopCardPopupServiceService) { }

  // Method to simulate user authentication (replace with actual authentication logic)
  login(firstname: string, sirname: string): boolean {
    // Example: Check if username and password match some predefined values

    if (firstname.trim().length != 0 && sirname.trim().length != 0) {
      this.shop.cusFirstName = firstname;
      this.shop.cusSirName = sirname;
      this.router.navigate(['/home']);
      this.Authenticated = true;
      this.shop.isAuth = true;
      return true;
    } else {
      alert("Fülle die Felder aus")
      this.Authenticated = false;
      return false;
    }

  }

  // Method to simulate user logout
  logout(): void {
    this.Authenticated = false;
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.Authenticated;

  }

}
