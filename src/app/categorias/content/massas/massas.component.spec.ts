import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassasComponent } from './massas.component';

describe('MassasComponent', () => {
  let component: MassasComponent;
  let fixture: ComponentFixture<MassasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
