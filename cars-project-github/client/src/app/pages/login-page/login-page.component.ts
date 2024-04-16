import { HttpClientModule } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HttpClientModule, RouterLink, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  correctUsername = '';
  correctPassword = '';
  username = '';
  password = '';

  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url(assets/IMG_6031.JPG)');
  }

  checkIn(username: string, password: string): boolean {
    return username === this.correctUsername && password === this.correctPassword;
  }

  login(): void {
    
    if (this.checkIn(this.username, this.password)) {
      this.router.navigate(['/auth/home']);
    } else {
      alert('Incorrect username or password. Please try again.');
      this.username = '';
      this.password = '';
    }
  }
}