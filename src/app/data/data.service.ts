import { Vote } from './vote';
import { users } from './data';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  restaurants: Restaurant[] = [];
  votes: Vote[] = [];

  public votedToday: boolean = false;

  constructor() { }

  generateRestaurants() {

    for (var index = 1; index <= 8; index++) {

      this.restaurants.push(
        new Restaurant(
          index,
          'Restaurante ' + (Math.random() * 100).toFixed(0),
          Math.floor(Math.random() * 14),
          'Rua João Clemente ' + (Math.random() * 1000).toFixed(0),
          Math.floor(Math.random() * 5) + 1,
          'img-' + (Math.floor(Math.random() * 4) + 1) + '.jpg'
        )
      )
    }
  }

  mode(arr) {
    let counts = arr.reduce((a, c) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts) as any);
    return Object.keys(counts).filter(k => counts[k] === maxCount);
  }

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRestaurantById(id: number): Restaurant {
    return this.restaurants.find(el => el.id === id);
  }

  getTotalUserVoting(id): number {

    const votes = this.votes.filter(v => v.user.id === id)
    return votes.length;
  }

  getBestClients(id) {

    const votes = this.votes.filter(v => v.restaurant.id === id).map(v => v.user.id);
    const bestUsersIds = this.mode(votes);
    const bestUsers = bestUsersIds.map(u => users.find(user => user.id === parseInt(u)));

    return bestUsers;
  }

  getFavoriteRestaurants(id) {

    const votes = this.votes.filter(v => v.user.id === id).map(v => v.restaurant.id);
    const bestRestaurantsIds = this.mode(votes);
    const bestRestaurants = bestRestaurantsIds.map(r => this.restaurants.find(rest => rest.id === parseInt(r)));

    return bestRestaurants;
  }

  getDayWinner() {

    const dayVotes = this.votes.filter(v => v.date.toDateString() === new Date().toDateString()).map(v => v.restaurant.id);
    const winners = this.mode(dayVotes);

    if (winners.length > 1) { // em caso de empate em votos, o critério de desempate é pelo menor preço, se também for igual então é sorteado

      const winnersRes = winners.map(r => this.restaurants.find(el => el.id === parseInt(r)));
      let lessPrice = 999;
      winnersRes.forEach(r => {
        if (r.pricing < lessPrice) lessPrice = r.pricing;
      });

      const lessPriceRestaurants = winnersRes.filter(r => r.pricing === lessPrice);
      if (lessPriceRestaurants.length > 1){
        return lessPriceRestaurants[Math.floor(Math.random() * lessPriceRestaurants.length)]
      } else {
        return lessPriceRestaurants[0];
      }
    } else {
      return this.restaurants.find(r => r.id === parseInt(winners[0]));
    }
  }

  generateVoting() {
    // 30 dias de votação anterior

    const hoje = new Date();
    var dia = new Date();

    while (daysDiff(hoje, dia) < 30) {

      users.forEach(user => {

        if (Math.random() > 0.25) { // 25% de chance do usuário não votar neste dia
          this.votes.push(
            new Vote(
              user,
              this.restaurants[Math.floor(Math.random() * this.restaurants.length)],
              new Date(dia)
            )
          )
        }
      });
      dia.setDate(dia.getDate() - 1);
    }

    function daysDiff(date1, date2) {
      const diffTime = Math.abs(date2 - date1);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }


}
