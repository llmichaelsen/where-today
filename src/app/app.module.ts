import { DataService } from './data/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalheComponent } from './restaurantes/restaurante-detalhe/restaurante-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    UsersComponent,
    RestaurantesComponent,
    RestauranteDetalheComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
