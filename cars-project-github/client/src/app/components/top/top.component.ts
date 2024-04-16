import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [HttpClientModule, RouterLink, LoaderComponent, NgFor],
  providers: [CarsService],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  cars: Car[] = []

  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      this.cars = data.sort((a, b) => b.price - a.price).slice(0, 5);
    });
  }

  showDetailsCar(id: string) {
    this.router.navigate(['/auth/details-car', id])
  }
}
