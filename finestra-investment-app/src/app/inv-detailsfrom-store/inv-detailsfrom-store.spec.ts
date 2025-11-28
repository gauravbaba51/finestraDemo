import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDetailsfromStore } from './inv-detailsfrom-store';

describe('InvDetailsfromStore', () => {
  let component: InvDetailsfromStore;
  let fixture: ComponentFixture<InvDetailsfromStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvDetailsfromStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvDetailsfromStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
