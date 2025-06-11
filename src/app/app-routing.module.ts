import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgClassComponent } from './components/topics/ng-class/ng-class.component';
import { NgStyleComponent } from './components/topics/ng-style/ng-style.component';
import { NgForComponent } from './components/topics/ng-for/ng-for.component';
import { NgifComponent } from './components/topics/ngif/ngif.component';
import { UsersComponent } from './components/users/users.component';
import { TemFormComponent } from './components/topics/tem-form/tem-form.component';
import { ReactiveComponent } from './components/topics/reactive/reactive.component';
import { StudentComponent } from './components/student/student.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { DashboardResolverService } from './services/dashboard-resolver.service';
import { Student2Component } from './components/student2/student2.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'emp',
        component: EmployeeComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        resolve: {
          dashboardData : DashboardResolverService
        },
        title:'Dash-board',
        data:{
          icon:'fa fa-user',
          role:'admin'
        }
      },
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'AddUser',
        component: AddUserComponent
      },
      {
        path:'ngif',
        component: NgifComponent
      },
      {
        path:'ng-for',
        component: NgForComponent
      },
      {
        path:'ng-class',
        component: NgClassComponent
      },
      {
        path:'ng-style',
        component: NgStyleComponent
      },
      {
        path:'template',
        component: TemFormComponent
      },
      {
        path:'reactive',
        component: ReactiveComponent
      },
      {
        path:'student',
        component: StudentComponent,
        title:'Student Page',
      },
      {
        path:'student2',
        component: Student2Component,
        title:'Student Page',
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
