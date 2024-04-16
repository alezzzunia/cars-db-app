import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { DetailsCarComponent } from './components/details-car/details-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'auth', component: AuthPageComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'maintenance', component: MaintenanceComponent},
        {path: 'top', component: TopComponent},
        {path: 'add-car', component: AddCarComponent},
        {path: 'details-car/:id', component:DetailsCarComponent},
        {path: 'edit-car/:id', component: EditCarComponent},
    ]},
    {path: '**', component: NotFoundComponent}
];
