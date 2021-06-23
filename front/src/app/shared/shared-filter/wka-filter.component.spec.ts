import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkaFilterComponent } from './wka-filter.component';

describe('WkaFilterComponent', () => {
  let component: WkaFilterComponent;
  let fixture: ComponentFixture<WkaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkaFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
