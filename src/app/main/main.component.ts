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

  calcOnClick(distance: number, age: number, baggage: number): void {
    const temp = this.calcOfferService.calcOffers(distance, age, baggage);
    this.offers = temp;
  }
}
