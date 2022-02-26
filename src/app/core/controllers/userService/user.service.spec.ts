import { HttpClientTestingModule } from '@angular/common/http/testing/'
import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

describe('Service: NewsUsers', () => {
  let service: UsersService

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[ 
        HttpClientTestingModule,
        HttpService
       ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should get', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

});
