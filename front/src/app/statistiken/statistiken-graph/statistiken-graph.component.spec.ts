import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikenGraphComponent } from './statistiken-graph.component';

describe('StatistikenGraphComponent', () => {
  let component: StatistikenGraphComponent;
  let fixture: ComponentFixture<StatistikenGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistikenGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikenGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
