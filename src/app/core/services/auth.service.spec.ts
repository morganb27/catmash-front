import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the login method is called', () => {
    let expectedResponse = { token: '123456' };

    beforeEach(() => {
      httpClientSpy.post.and.returnValue(of(expectedResponse));
    })

    it('it should return a token', () => {
      service.login('test@example.com', '12345').subscribe(response => {
        expect(response).toEqual(expectedResponse);
      });
    })
    it('should call HttpClient.post once', () => {
      service.login('test@example.com', '12345').subscribe();
      expect(httpClientSpy.post.calls.count()).toBe(1);
    })
    it('should call HttpClient.post with correct URL', () => {
      service.login('test@example.com', '12345').subscribe();
      expect(httpClientSpy.post.calls.mostRecent().args[0]).toBe('https://spring-boot-catmash.fly.dev/auth/authenticate');
    })
    it('should call HttpClient.post with correct credentials', () => {
      service.login('test@example.com', '12345').subscribe();
      expect(httpClientSpy.post.calls.mostRecent().args[1]).toEqual({ email: 'test@example.com', password: '12345' })
    })
  })
});
