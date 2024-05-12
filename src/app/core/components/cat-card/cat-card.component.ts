import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormatRankingPipe } from '../../pipes/format-ranking.pipe';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [CommonModule, FormatRankingPipe],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent {
  @Input() name: string = '';
  @Input() vote: number = 0;
  @Input() ranking: number = 0;
  @Input() imageURL: string = '';

  formatRanking(ranking: number): string {
    return ranking < 10 ? `0${ranking}` : `${ranking}`;
  }

}
