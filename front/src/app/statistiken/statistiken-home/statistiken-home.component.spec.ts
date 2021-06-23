import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikenHomeComponent } from './statistiken-home.component';

describe('StatistikenHomeComponent', () => {
  let component: StatistikenHomeComponent;
  let fixture: ComponentFixture<StatistikenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistikenHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
