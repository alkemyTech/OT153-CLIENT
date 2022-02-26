/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsUsersService } from './newsUsers.service';

describe('Service: NewsUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsUsersService]
    });
  });

  it('should ...', inject([NewsUsersService], (service: NewsUsersService) => {
    expect(service).toBeTruthy();
  }));
});
