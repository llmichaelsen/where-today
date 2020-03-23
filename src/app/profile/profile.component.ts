import { DataService } from './../data/data.service';
import { Restaurant } from './../data/restaurant';
import { users } from './../data/data';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    user;

    totalVoting: number;

    favoriteRestaurants: Restaurant[] = [];

    constructor(private route: ActivatedRoute, private dataServ: DataService) { }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.user = users.find(el => el.id === id);
        this.favoriteRestaurants = this.dataServ.getFavoriteRestaurants(this.user.id);

        this.totalVoting = this.dataServ.getTotalUserVoting(this.user.id);
    }

}
