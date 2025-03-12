import { TestBed } from '@angular/core/testing';

import { ShopCardPopupServiceService } from './shop-card-popup-service.service';

describe('ShopCardPopupServiceService', () => {
  let service: ShopCardPopupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCardPopupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
