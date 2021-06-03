import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PudimComponent } from './pudim.component';

describe('PudimComponent', () => {
  let component: PudimComponent;
  let fixture: ComponentFixture<PudimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PudimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PudimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
