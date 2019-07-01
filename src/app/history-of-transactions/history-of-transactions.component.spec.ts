import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfTransactionsComponent } from './history-of-transactions.component';

describe('HistoryOfTransactionsComponent', () => {
  let component: HistoryOfTransactionsComponent;
  let fixture: ComponentFixture<HistoryOfTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
