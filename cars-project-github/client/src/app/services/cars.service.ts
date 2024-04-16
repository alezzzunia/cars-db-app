import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url: string = 'http://localhost:3000/api/cars'


  constructor(private http: HttpClient) { }

  getCars() : Observable<Car[]> {
    return this.http.get(this.url) as Observable<Car[]>;
  }

  addCar(car: Car) : Observable<any> {
    return this.http.post(this.url, car)
  }

  deleteCar(id: string) : Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(delay(2000))
  }

  getCarById(id: string) : Observable<Car> {
    return this.http.get(`${this.url}/${id}`) as Observable<Car>
  }

  editCar(car: Car, id: string) {
    return this.http.put(`${this.url}/${id}`, car)
  }

}
