import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Apidata, Apidatareducer } from '../store/apidata.reducer';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products$?:Observable<Apidata[]>;
  constructor(private store:Store<{products:Apidata[]}>){  
  this.products$ = store.select("products")
  }

  increment(item:Apidata){
  const payload={
     id: item.id,
    title:item.title,
    price:item.price,
    description:item.description,
    image:item.image,
    category:item.category,
    rating:item.rating,
    quantity:1

}
this.store.dispatch({type:"update",payload:payload});
  }
}
