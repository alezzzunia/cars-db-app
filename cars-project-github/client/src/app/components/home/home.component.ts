import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { Car } from '../../models/car';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HttpClientModule, RouterLink, LoaderComponent, NgIf],
  providers: [CarsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars: Car[] = []

  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
  }

  showDetailsCar(id: string) {
    this.router.navigate(['/auth/details-car', id])
  }
}
