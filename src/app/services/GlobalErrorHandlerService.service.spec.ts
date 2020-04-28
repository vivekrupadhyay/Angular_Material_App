/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalErrorHandlerServiceService } from './GlobalErrorHandlerService.service';

describe('Service: GlobalErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandlerServiceService]
    });
  });

  it('should ...', inject([GlobalErrorHandlerServiceService], (service: GlobalErrorHandlerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
