import { Component, OnInit } from '@angular/core';

import { HeroService } from './../services/hero.service';
import { Hero } from './../models/hero';

@Component({
    moduleId: module.id,
    templateUrl: './../templates/dashboard.component.html',
    selector: 'my-dashboard'
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

}