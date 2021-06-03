import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasanhaComponent } from './lasanha.component';

describe('LasanhaComponent', () => {
  let component: LasanhaComponent;
  let fixture: ComponentFixture<LasanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
