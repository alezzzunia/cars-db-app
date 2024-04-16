import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [CarsService],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent {

  id: string = ''

  editCarForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    image: new FormControl('', Validators.required),
  });

  constructor(private carService: CarsService, private router: Router, private activatedRoute: ActivatedRoute,) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
  }

  submit() {
    
    if(this.editCarForm.valid) {

      const {name, model, price, image} = this.editCarForm.value
      
      const car = new Car(name, model, price, image)

      this.carService.editCar(car, this.id).subscribe(() => {
        this.router.navigate(['/auth/maintenance'])
      })
    }

  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Car } from '../../models/car';
// import { CarsService } from '../../services/cars.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ReactiveFormsModule} from '@angular/forms';

// @Component({
//   selector: 'app-edit-car',
//   templateUrl: './edit-car.component.html',
//   styleUrls: ['./edit-car.component.css']
// })
// export class EditCarComponent implements OnInit {
  
//   id: string = '';
//   editCarForm: FormGroup;
//   car: Car = new Car('', '', 0, '');

//   constructor(private carService: CarsService, private router: Router, private activatedRoute: ActivatedRoute) {
//     this.editCarForm = new FormGroup({
//       name: new FormControl('', Validators.required),
//       model: new FormControl('', Validators.required),
//       price: new FormControl(null, Validators.required),
//       image: new FormControl('', Validators.required),
//     });
//   }

//   ngOnInit() {
//     this.id = this.activatedRoute.snapshot.params['id'];
    
//     this.carService.getCarById(this.id).subscribe((car: Car) => {
//       this.car = car;
//       this.populateForm();
//     });
//   }

//   populateForm() {
//     this.editCarForm.patchValue({
//       name: this.car.name,
//       model: this.car.model,
//       price: this.car.price,
//       image: this.car.image
//     });
//   }

//   submit() {
//     if (this.editCarForm.valid) {
//       const { name, model, price, image } = this.editCarForm.value;
//       const updatedCar = new Car(name, model, price, image);

//       this.carService.editCar(updatedCar, this.id).subscribe(() => {
//         this.router.navigate(['/auth/maintenance']);
//       });
//     }
//   }
// }
