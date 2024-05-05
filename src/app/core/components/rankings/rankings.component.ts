import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { CommonModule } from '@angular/common';
import { ThreeDEffectDirective } from '../../directives/three-d-effect.directive';
import { CatCardComponent } from '../cat-card/cat-card.component';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [CommonModule, ThreeDEffectDirective, CatCardComponent, LottieComponent],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.css'
})
export class RankingsComponent implements OnInit {
  options: AnimationOptions = {
    path: './assets/animations/celebration-animation.json',
    autoplay: true,
    loop: false
  };
  private animationItem: AnimationItem | undefined;

  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
      this.catService.getCats().subscribe({
        next: (cats: Cat[]) => {
          this.cats = cats.sort((a, b) => b.votes - a.votes);
          this.playAnimation();
        },
        error: (error) => {
          console.error('Failed to load cats', error);
        }
      })
  }

  playAnimation(): void {
    if (this.animationItem) {
      this.animationItem.play();
    }
  }

}
