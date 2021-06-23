import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkaMapComponent } from './wka-map.component';

describe('WkaMapComponent', () => {
  let component: WkaMapComponent;
  let fixture: ComponentFixture<WkaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
