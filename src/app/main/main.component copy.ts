import { CalcOfferService } from './../calc-offer.service';
import { Component, OnInit } from '@angular/core';
import Offer from '../offerInterface';
import { OFFERRATESFLY } from '../offer-rates-fly';
import { OFFERRATESROAD } from '../offer-rates-road';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  distance: number = 0;
  age: number = 0;
  weight: number = 0;

  offers: Offer[] = [];

  constructor(private calcOfferService: CalcOfferService) {}

  ngOnInit(): void {}

  // calcOnClick(distance: number, age: number, baggage: number): void {
  //   this.offers = this.calcOfferService.calcOffers(distance, age, baggage);
  // }

  calcOffers(distance: number, age: number, baggage: number): Offer[] {
    const offers: Offer[] = [];
    console.log(distance, age, baggage);

    for (let flyOffer of OFFERRATESFLY) {
      console.log(flyOffer);
      if (flyOffer.baggageMax > baggage) {
        console.log('fly calc');
        let priceDistance = distance * flyOffer.km;
        let priceBaggage = baggage > 5 ? flyOffer.baggagePrice : 0;
        priceDistance =
          age < flyOffer.childAge
            ? priceDistance * (1 - flyOffer.childSale / 100)
            : priceDistance;

        this.offers.push({
          price: priceDistance + priceBaggage,
          provideName: 'Аэрофлот',
          rate: flyOffer.rate,
        });
      }
    }

    for (let roadOffer of OFFERRATESROAD) {
      if (roadOffer.baggageMax > baggage) {
        let priceDistance = distance * roadOffer.km;
        let priceBaggage = baggage > 5 ? roadOffer.baggagePrice : 0;
        priceDistance =
          age < roadOffer.childAge
            ? priceDistance * (1 - roadOffer.childSale / 100)
            : priceDistance;

        this.offers.push({
          price: priceDistance + priceBaggage,
          provideName: 'РЖД',
          rate: roadOffer.rate,
        });
      }
    }

    console.log(this.offers);
    // this.offers = offers;
    return this.offers;
  }
}
