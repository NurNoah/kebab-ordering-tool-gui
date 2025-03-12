import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardPopupComponent } from './shop-card-popup.component';

describe('ShopCardPopupComponent', () => {
  let component: ShopCardPopupComponent;
  let fixture: ComponentFixture<ShopCardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCardPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
