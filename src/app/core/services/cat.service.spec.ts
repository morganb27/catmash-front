import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CatService', () => {
  let service: CatService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
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
});
