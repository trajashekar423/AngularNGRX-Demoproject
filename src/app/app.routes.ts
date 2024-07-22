import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'products', component: ProductsComponent},
  {path:'contact', component:ContactComponent}

];
