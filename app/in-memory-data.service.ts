import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by jean-michel.legrand on 13/10/2016.
 */

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        let heroes = [
            {id: 1, name: 'Laurent FIGNON'},
            {id: 2, name: 'Michel PLATINI'},
            {id: 3, name: 'Michel HIDALGO'},
            {id: 4, name: 'Michel MEZY'},
            {id: 5, name: 'Daniel BRAVO'},
            {id: 6, name: 'Christian KAREMBEU'},
            {id: 7, name: 'Zinedine ZIDANE'},
            {id: 8, name: 'Emmanuel PETIT'}
        ];
        return {heroes};
    }
}