import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopCardComponent } from './main-shop-card.component';

describe('MainShopCardComponent', () => {
  let component: MainShopCardComponent;
  let fixture: ComponentFixture<MainShopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShopCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
