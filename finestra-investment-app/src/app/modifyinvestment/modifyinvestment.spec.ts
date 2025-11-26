import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifyinvestment } from './modifyinvestment';

describe('Modifyinvestment', () => {
  let component: Modifyinvestment;
  let fixture: ComponentFixture<Modifyinvestment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modifyinvestment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modifyinvestment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
