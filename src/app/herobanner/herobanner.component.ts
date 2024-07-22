import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Homebanner } from '../store/home.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herobanner.component.html',
  styleUrl: './herobanner.component.css'
})
export class HerobannerComponent {
  hero$?:Observable<Homebanner[]>;
  constructor(private store:Store<{hero:Homebanner[]}>){  
  this.hero$ = store.select("hero")
  }
}
