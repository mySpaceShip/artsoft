import { Component, OnInit } from '@angular/core';
import { dataCard } from '../data-card';
import { TransactionsStoreService } from '../transactions-store.service';

@Component({
  selector: 'app-history-of-transactions',
  templateUrl: './history-of-transactions.component.html',
  styleUrls: ['./history-of-transactions.component.sass']
})
export class HistoryOfTransactionsComponent implements OnInit {
  constructor(public transactionsStoreService: TransactionsStoreService) {
  }

  transactions: dataCard[];

  ngOnInit(): void {
    this.transactions = this.transactionsStoreService.getTransactions();
  }

  deleteTransactions(index: number) {
    this.transactionsStoreService.deleteTransaction(index);
  }
  repeatTransaction(index: number) {
    this.transactionsStoreService.repeatTransaction(index)
  }
}
