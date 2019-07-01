import { TestBed } from '@angular/core/testing';

import { TransactionsStoreService } from './transactions-store.service';

describe('TransactionsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsStoreService = TestBed.get(TransactionsStoreService);
    expect(service).toBeTruthy();
  });
});
