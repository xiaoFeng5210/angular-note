import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  childData: string

  @ViewChild(HeroSearchComponent)
  private heroSearch: HeroSearchComponent

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // 在专门的生命周期里去拿子组件实例
  ngAfterViewInit() {
    setTimeout(() => {
      this.childData = this.heroSearch.outputParent;
    }, 0)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
