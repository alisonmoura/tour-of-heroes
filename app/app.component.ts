import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details</h2>
  <div>
    <h2><label>id: </label>{{hero.id}}</h2>
  </div>
  <div>
    <label>name: </label>
    <input type="text" [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Hero';
  hero: Hero = {
    name: 'Windstorm',
    id: 1
  };
}
