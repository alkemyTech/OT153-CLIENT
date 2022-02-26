import { HttpClientTestingModule } from '@angular/common/http/testing/'
import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

describe('Service: NewsUsers', () => {
  let service: UserService

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[ 
        HttpClientTestingModule,
        HttpService
       ]
    });
    service = TestBed.inject(UserService);
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should get', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
