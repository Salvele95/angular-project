import { Component, Input, OnInit } from '@angular/core';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  beers = this.beerService.getBeersList();

  constructor(public beerService: BeerService) {}

  ngOnInit() {}
}
