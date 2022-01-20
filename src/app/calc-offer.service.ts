import { Injectable } from '@angular/core';
import Offer from './offerInterface';
import { OFFERRATESFLY } from './offer-rates-fly';
import { OFFERRATESROAD } from './offer-rates-road';

@Injectable({
  providedIn: 'root',
})
export class CalcOfferService {
  constructor() {}

  calcOffers(distance: number, age: number, baggage: number): Offer[] {
    const offers: Offer[] = [];

    for (let flyOffer of OFFERRATESFLY) {
      if (flyOffer.baggageMax > baggage) {
        let priceDistance = distance * flyOffer.km;
        let priceBaggage = baggage > 5 ? flyOffer.baggagePrice : 0;
        priceDistance =
          age < flyOffer.childAge
            ? priceDistance * (1 - flyOffer.childSale / 100)
            : priceDistance;

        offers.push({
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

        offers.push({
          price: priceDistance + priceBaggage,
          provideName: 'РЖД',
          rate: roadOffer.rate,
        });
      }
    }

    console.log('sam offer', offers);

    return offers;
  }
}
