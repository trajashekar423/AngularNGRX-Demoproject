import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Homebanner } from '../store/home.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  hero$?:Observable<Homebanner[]>;
  constructor(private store:Store<{hero:Homebanner[]}>){  
  this.hero$ = store.select("hero")
  }
}
