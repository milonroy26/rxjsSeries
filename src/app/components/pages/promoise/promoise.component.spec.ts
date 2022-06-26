import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoiseComponent } from './promoise.component';

describe('PromoiseComponent', () => {
  let component: PromoiseComponent;
  let fixture: ComponentFixture<PromoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
