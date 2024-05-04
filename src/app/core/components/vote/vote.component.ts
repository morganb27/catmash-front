import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent implements OnInit{
  cats: Cat[] = [];
  displayedCats: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
      this.catService.getCats().subscribe({
        next: (cats: Cat[]) => {
          console.log("list of cats", cats);
          this.cats = cats;
          this.shuffleCats();
        }
      })
  }

  shuffleCats(): void {
    this.displayedCats = this.getRandomCats();
  }

  getRandomCats(): Cat[] {
    let shuffled = this.cats.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  voteForCat(catId: number): void {
    console.log('Voted for cat:', catId);
    this.catService.incrementVote(catId).subscribe({
      next: (updatedCat) => {
        console.log("Vote incremented for cat:", updatedCat);
      }, error: (error) => console.error('Error incrementing vote:', error)
    })
    this.shuffleCats();  
  }


}
