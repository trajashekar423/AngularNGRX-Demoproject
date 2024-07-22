npm install -g @angular/cli@17.0.0

Step 1
-------
ngrx setup
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
ng add @ngrx/entity
ng add @ngrx/schematics


Step 2
------ 
create a Store folder and inside folder create home.reducer.ts


Step 3
-------
use snippet for creating reducers {ngrx-reducer}


Step 4
-------
Create Initital Values for dummy 


export interface Homebanner {
        banners:string;
        bannersdec:string;
};

const initialState: Homebanner[] = [
    {
        banners: "Border hero with cropped image and shadows",
        bannersdec: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
    },
    
];



Step 4 
------
import your reducer in app.config.ts file inside {provideStore({hero:Homebannerreducer}), }

Step 5
-------
check your redux devtool in chrome browser now you can use the initial store values


Step 6 
------

export class HerobannerComponent {
  hero$?:Observable<Homebanner[]>;
  constructor(private store:Store<{hero:Homebanner[]}>){  
   this.hero$ = store.select("hero")
  }
}


Step 7
------
in html page