import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = [];
  hero: Hero = {
    id: 1,
    name: 'bruce'
  };
  // 注入heroService, MessageService这个服务
  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    const test = this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
