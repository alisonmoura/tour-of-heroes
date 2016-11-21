import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component'
import { HeroService } from './services/hero.service'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
