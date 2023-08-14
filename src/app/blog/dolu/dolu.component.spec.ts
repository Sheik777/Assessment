import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoluComponent } from './dolu.component';

describe('DoluComponent', () => {
  let component: DoluComponent;
  let fixture: ComponentFixture<DoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
