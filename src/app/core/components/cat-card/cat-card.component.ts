import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent {
  @Input() name: string = 'Oréo';
  @Input() vote: number = 0;
  @Input() ranking: number = 0;
  @Input() imageURL: string = '';

}
