import { ActivatedRoute } from '@angular/router';
import { Restaurant } from './../../data/restaurant';
import { DataService } from './../../data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html',
  styleUrls: ['./restaurante-detalhe.component.css']
})
export class RestauranteDetalheComponent implements OnInit {

  restaurant: Restaurant;

  bestClients = [];

  constructor(private dataServ: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.restaurant = this.dataServ.getRestaurantById(id);

    this.bestClients = this.dataServ.getBestClients(this.restaurant.id);
  }

}
