import { Component, Renderer2 } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', '');
  }
}
