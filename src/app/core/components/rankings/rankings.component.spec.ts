import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsComponent } from './rankings.component';
import { HttpClientModule } from '@angular/common/http';

describe('RankingsComponent', () => {
  let component: RankingsComponent;
  let fixture: ComponentFixture<RankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingsComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
