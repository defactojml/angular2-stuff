/**
 * Created by jean-michel.legrand on 30/09/2016.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {Http} from "@angular/http";
import 'rxjs/add/operator/ToPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    }

    getHero(id: Number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}