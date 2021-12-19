import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '', component: HomeComponent,
  //   children:
  //   [
  //     {
  //       path: '',
  //       loadChildren: () => import('./components/default/default.module').then(module => module.DefaultModule)
  //     }
  //   ]
  // },
  { path: '', redirectTo: 'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
