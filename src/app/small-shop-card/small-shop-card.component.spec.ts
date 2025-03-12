import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallShopCardComponent } from './small-shop-card.component';

describe('SmallShopCardComponent', () => {
  let component: SmallShopCardComponent;
  let fixture: ComponentFixture<SmallShopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallShopCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
