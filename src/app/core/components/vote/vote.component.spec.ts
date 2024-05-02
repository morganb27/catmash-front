import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { HttpClientModule } from '@angular/common/http';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
