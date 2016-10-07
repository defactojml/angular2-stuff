import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})



export class AppModule {
}
