import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { EducationUpdateComponent } from './education-update/education-update.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { ResultUpdateComponent } from './result-update/result-update.component';


const routes: Routes = [
  // {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path: 'employees', component: EmployeeListComponent},
  {path: 'Sign Up', component: CreateEmployeeComponent},
  {path:'Login',component:LoginComponent},
  {path:'studentLogin',component:StudentLoginComponent},
  {path:'Logout',component:LoginComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'Personal Details/:id', component: EmployeeDetailsComponent},
  {path:'Personal Details',component:EmployeeDetailsComponent},
  {path:'Educational Details/:id',component:EducationComponent},
  {path: 'Education Details/Edit/:id', component: EducationUpdateComponent},
  {path:'Educational Details',component:EducationComponent},
  {path: 'Student Details/:id', component:StudentDetailsComponent},
  {path:'Student Details',component:StudentDetailsComponent},
  {path: 'Result Details/Update',component:ResultUpdateComponent},
  // {path:'Result Details/:id',component:ResultDetailsComponent},
  {path:'Result Details',component:ResultDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
