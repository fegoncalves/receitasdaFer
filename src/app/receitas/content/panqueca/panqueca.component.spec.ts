import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanquecaComponent } from './panqueca.component';

describe('PanquecaComponent', () => {
  let component: PanquecaComponent;
  let fixture: ComponentFixture<PanquecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanquecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanquecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
