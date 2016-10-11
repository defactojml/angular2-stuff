/**
 * Created by jean-michel.legrand on 07/10/2016.
 */

import {Component} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

    heroes: Hero[] = [];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }

    goToDetail(hero: Hero): void {
        console.info('JM - goToDetail');
        console.info('JM - hero', JSON.stringify(hero));
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}