import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoluComponent } from './bolu.component';

describe('BoluComponent', () => {
  let component: BoluComponent;
  let fixture: ComponentFixture<BoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
