import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolochocolateComponent } from './bolochocolate.component';

describe('BolochocolateComponent', () => {
  let component: BolochocolateComponent;
  let fixture: ComponentFixture<BolochocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolochocolateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolochocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
