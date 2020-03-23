import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './../shared/footer/footer.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent, NavbarComponent,
    FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
