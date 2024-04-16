import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-image', 'url(assets/IMG_6031.JPG)')
  }
}
