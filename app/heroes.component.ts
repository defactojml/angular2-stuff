import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{

    heroes : Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        console.info('JM - onSelect');
        console.info('JM - hero', JSON.stringify(hero));
        this.selectedHero = hero
    }

    goToDetail(hero: Hero): void {
        console.info('JM - goToDetail');
        console.info('JM - hero', JSON.stringify(hero));
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}



