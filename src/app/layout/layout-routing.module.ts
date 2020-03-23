import { RestauranteDetalheComponent } from './../restaurantes/restaurante-detalhe/restaurante-detalhe.component';
import { RestaurantesComponent } from './../restaurantes/restaurantes.component';
import { UsersComponent } from './../users/users.component';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './../profile/profile.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'users/:id', component: ProfileComponent },
      { path: 'users', component: UsersComponent },
      { path: 'restaurants', component: RestaurantesComponent },
      { path: 'restaurants/:id', component: RestauranteDetalheComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
