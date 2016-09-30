/**
 * Created by jean-michel.legrand on 30/09/2016.
 */

import {Injectable} from '@angular/core';
import {Hero} from "./hero";

const HEROES: Hero[] = [
    {id: 2, name: 'Michel PLATINI'},
    {id: 3, name: 'Michel HIDALGO'},
    {id: 4, name: 'Michel MEZY'},
    {id: 5, name: 'Daniel BRAVO'},
    {id: 6, name: 'Christian KAREMBEU'},
    {id: 7, name: 'Zinedine ZIDANE'}
];

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }

}