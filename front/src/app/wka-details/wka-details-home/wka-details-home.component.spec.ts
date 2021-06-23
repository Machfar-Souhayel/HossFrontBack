import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WkaDetailsHomeComponent } from './wka-details-home.component';

describe('WkaDetailsHomeComponent', () => {
  let component: WkaDetailsHomeComponent;
  let fixture: ComponentFixture<WkaDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WkaDetailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WkaDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
