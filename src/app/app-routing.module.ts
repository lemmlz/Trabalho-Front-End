import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LaboratoriesComponent } from './pages/laboratories/laboratories.component';
import { ComputersComponent } from './pages/computers/computers.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'laboratories', component: LaboratoriesComponent },
  { path: 'computers', component: ComputersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
