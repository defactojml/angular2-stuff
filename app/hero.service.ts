/**
 * Created by jean-michel.legrand on 30/09/2016.
 */

import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }

}