import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/common/hero.model';
import { HeroService } from '../heroes/common/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}