import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompfilhoComponent } from './compfilho.component';

describe('CompfilhoComponent', () => {
  let component: CompfilhoComponent;
  let fixture: ComponentFixture<CompfilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompfilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompfilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
