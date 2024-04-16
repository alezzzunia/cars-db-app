import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, HttpClientModule],
  providers: [CarsService],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css',
})
export class AddCarComponent {
  addCarForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    image: new FormControl('', Validators.required),
  });

  constructor(private carService: CarsService, private router: Router) {

  }

  submit() {
    // console.log(this.addCarForm)

    if (this.addCarForm.valid) {

      // let name = this.addCarForm.value.name
      // let model = this.addCarForm.value.model
      // let price = this.addCarForm.value.price

      let { name, model, price, image } = this.addCarForm.value

      const newCar = new Car(name, model, price, image)

      this.carService.addCar(newCar).subscribe(() => {
        this.router.navigate(['/auth/maintenance'])
      })
    }
  }
}
