import { Restaurant } from './restaurant';

export class Vote {

    user: any;
    restaurant: Restaurant;
    date: Date;

    constructor(user, restaurant, date) {
        this.user = user;
        this.restaurant = restaurant;
        this.date = date;
    }
}