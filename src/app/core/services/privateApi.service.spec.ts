import { TestBed } from "@angular/core/testing";
import { PrivateApiService } from "./privateApi.service";

describe("PrivateApiService", () => {
  let service: PrivateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
