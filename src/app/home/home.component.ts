import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from './../data/restaurant';
import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    dayWinner: Restaurant;
    restaurants: Restaurant[] = [];
    model = {
        left: true,
        middle: false,
        right: false
    };

    selectedRestaurant;

    voted: boolean = false;

    focus;
    focus1;
    constructor(public dataServ: DataService, private modalService: NgbModal) { }

    ngOnInit() {
        this.dayWinner = this.dataServ.getDayWinner();
        this.restaurants = this.dataServ.getRestaurants();
        this.selectedRestaurant = this.restaurants[0].id;
    }

    vote(content) {

        if (this.selectedRestaurant == this.dayWinner.id) {
            alert('Restaurante selecionado já foi escolhido esta semana!');
            return;
        }
        this.dataServ.votedToday = true;
        this.open(content);
    }

    open(content) {
        this.modalService.open(content, { windowClass: 'modal-success', centered: true })
    }
}
