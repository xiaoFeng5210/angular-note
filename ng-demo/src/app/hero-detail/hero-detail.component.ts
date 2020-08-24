import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(''),
    choose: new FormControl(''),
    address: new FormGroup({
      xuzhou: new FormControl(''),
      nanjing: new FormControl('')
    })
  });
  get firstName() { return this.profileForm.get('firstName') }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHeroDetail();
  }
  onSubmit() {
    console.log(this.profileForm.value)
  }
  changeChoose() {
    this.profileForm.patchValue({
      choose: true
    })
  }
  getHeroDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.heroService.testObservable().subscribe(
      x => console.log(x))
  }
  goBack() {
    this.location.back();
  }
}
