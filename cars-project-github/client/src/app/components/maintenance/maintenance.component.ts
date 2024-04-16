import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [HttpClientModule, NgFor, RouterLink, LoaderComponent, NgIf],
  providers: [CarsService], 
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

  cars: Car[] = []

  isLoading: boolean = false

  deleteId: string = ''

  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      this.cars = data
    })
  }

  deleteCar(id: string) {
    this.deleteId = id
    // console.log(id)
    this.isLoading = true
    this.carsService.deleteCar(id).subscribe(() => {
      this.isLoading = false
      this.cars = this.cars.filter((car) => car._id != id)

      // alert('Deleted')
    })
  }

  showDetailsCar(id: string) {
    // console.log(id)
    this.router.navigate(['/auth/details-car', id])
  }

  editCar(id: string) {
    this.router.navigate(['/auth/edit-car', id])
  }


}
