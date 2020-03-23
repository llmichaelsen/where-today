import { DataService } from './../data/data.service';
import { Restaurant } from './../data/restaurant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurant[] = [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.restaurantes = this.dataServ.getRestaurants();
  }

}
