import {Component} from "@angular/core";
/**
 * Created by jean-michel.legrand on 07/10/2016.
 */


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/heroes">Heroes</a>
        <router-outlet></router-outlet>
        `,
})

export class AppComponent {
    title = 'Tour of Heroes';
}