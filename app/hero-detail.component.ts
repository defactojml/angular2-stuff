/**
 * Created by jean-michel.legrand on 29/09/2016.
 */

import {Component, Input, OnInit} from "@angular/core";
import {Location} from '@angular/common';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details </h2>
            <div><label>id: </label> {{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
        
        <button (click)="goBack()">Back</button>
    `
})

export class HeroDetailComponent implements OnInit{

    @Input() hero: Hero;

    constructor(
        private heroService : HeroService,
        private route : ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        })
    }

    goBack() : void {
        this.location.back();
    }
}