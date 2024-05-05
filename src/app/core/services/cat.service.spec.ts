import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cat } from '../models/cat';
import { of } from 'rxjs';

describe('CatService', () => {
  let service: CatService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'patch']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CatService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]

    });
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the getCats method is called', () => {
    let expectedCats: Cat[];

    beforeEach(() => {
      expectedCats = [{ id: 1, name: 'Tom', imageURL: 'http://example.com/cat-image', votes: 0 }, 
      { id: 1, name: 'Jerry', imageURL: 'http://example.com/cat-image', votes: 1 }];
      httpClientSpy.get.and.returnValue(of(expectedCats));
    })
    it('should return an array of cats', () => {
      service.getCats().subscribe(cats => {
        expect(cats).toEqual(expectedCats);
      })
    })
    it('should call HttpClient.get once', () => {
      service.getCats().subscribe();
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
    it('should call HttpClient.get with correct URL', () => {
      service.getCats().subscribe();
      expect(httpClientSpy.get.calls.mostRecent().args[0]).toBe('https://spring-boot-catmash.fly.dev/cats');
    });
  })

  describe('When the incrementVote method is called', () => {
    let expectedCat: Cat;
    const catId = 1;

    beforeEach(() => {
      expectedCat = { id: 1, name: 'Tom', imageURL: 'http://example.com/cat-image', votes: 10 };
      httpClientSpy.patch.and.returnValue(of(expectedCat));
    })
    it('should return an instance of the cat that receive a vote', () => {
      service.incrementVote(catId).subscribe(cat => {
        expect(cat).toEqual(expectedCat);
      })
    })
    it('should call HttpClient.patch once', () => {
      service.incrementVote(catId).subscribe();
      expect(httpClientSpy.patch.calls.count()).toBe(1);
    });
    it('should call HttpClient.patch with correct URL', () => {
      service.incrementVote(catId).subscribe();
      expect(httpClientSpy.patch.calls.mostRecent().args[0]).toBe(`https://spring-boot-catmash.fly.dev/cats/${catId}/vote`);
    });
  })
});
