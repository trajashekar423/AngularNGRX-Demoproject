import { Component } from '@angular/core';
import { HerobannerComponent } from "../herobanner/herobanner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HerobannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
