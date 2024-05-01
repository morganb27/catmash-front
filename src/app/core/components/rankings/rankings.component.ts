import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rankings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rankings.component.html',
  styleUrl: './rankings.component.css'
})
export class RankingsComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
      this.catService.getCats().subscribe({
        next: (cats: Cat[]) => {
          this.cats = cats;
        },
        error: (error) => {
          console.error('Failed to load cats', error);
        }
      })
  }

}
