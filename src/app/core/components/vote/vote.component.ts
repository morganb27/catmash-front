import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.css'
})
export class VoteComponent implements OnInit{

  constructor(private catService: CatService) {}

  ngOnInit(): void {
      this.catService.getCats().subscribe({
        next: (cats: Cat[]) => {
          console.log("list of cats", cats);
        }
      })
  }

}
