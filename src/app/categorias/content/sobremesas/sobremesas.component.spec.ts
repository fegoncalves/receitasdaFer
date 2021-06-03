import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesasComponent } from './sobremesas.component';

describe('SobremesasComponent', () => {
  let component: SobremesasComponent;
  let fixture: ComponentFixture<SobremesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
