// модель точек
import { offers } from '../data/offers.js';
import { points } from '../data/points.js';
import { destinations } from '../data/destinations.js';

export default class PointsModel {
  points = [];
  offers = [];
  destinations = [];

  constructor() {
    this.points = points;
    this.destinations = destinations;
    this.offers = offers;
  }

  getPoints() {
    return this.points;
  }

  getDestination() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
