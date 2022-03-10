import { TestBed } from '@angular/core/testing';

import { OrderRowsService } from './order-rows.service';

describe('OrderRowsService', () => {
  let service: OrderRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
