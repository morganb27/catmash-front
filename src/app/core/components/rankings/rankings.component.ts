import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { CommonModule } from '@angular/common';
import { ThreeDEffectDirective } from '../../directives/three-d-effect.directive';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [CommonModule, ThreeDEffectDirective, CatCardComponent],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.css'
})
export class RankingsComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
      this.catService.getCats().subscribe({
        next: (cats: Cat[]) => {
          this.cats = cats.sort((a, b) => b.votes - a.votes);
        },
        error: (error) => {
          console.error('Failed to load cats', error);
        }
      })
  }

}
