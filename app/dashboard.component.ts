/**
 * Created by jean-michel.legrand on 07/10/2016.
 */

import {Component} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }

    onSelect(hero: Hero): void {
        console.info('JM - onSelect');
        console.info('JM - hero', JSON.stringify(hero));
    }

}