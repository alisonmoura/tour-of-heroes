import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './../models/hero';
import { HeroService } from './../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './../templates/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroservice: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroservice.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}