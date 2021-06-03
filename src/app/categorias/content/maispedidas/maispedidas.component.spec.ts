import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaispedidasComponent } from './maispedidas.component';

describe('MaispedidasComponent', () => {
  let component: MaispedidasComponent;
  let fixture: ComponentFixture<MaispedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaispedidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaispedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
