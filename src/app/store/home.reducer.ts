import { createReducer } from '@ngrx/store';


export interface Homebanner {
        id: any;
        banners:string;
        bannersdec:string;
        button:string;
        button2:string;
        about:string;
};

const initialState: Homebanner[] = [
    {
        id:"1",
        banners: "My First Angular Project with NGRX Store",
        bannersdec: 'Store is RxJS powered global state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular. ',
        button:"Readmore",
        button2:"LearnMore",
        about:"TRANSFORMING IDEAS INTO UNIQUE SPACES"
    },
    
];

export const Homebannerreducer = createReducer(
    initialState,
 
);


