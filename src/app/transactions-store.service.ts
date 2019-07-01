import { Injectable } from '@angular/core';
import {dataCard} from './data-card';
import {transactions} from './transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsStoreService {
 transaction: dataCard = {
     payerCard: '',
     beneficiaryCard: '',
     fio: '',
     forMonth: null,
     forYear: null,
     date: null,
     quantaty: null,
 }
 transactions: dataCard[] = [];
  constructor() { }
  setTransaction(card: dataCard) {
    this.transactions = JSON.parse(localStorage.getItem('transactions'))
      this.transaction = card
      this.transaction.forYear = parseInt(card.forYear)
      this.transaction.forMonth = parseInt(card.forMonth)
      this.transaction.quantaty = parseInt(card.quantaty)
      this.transaction.date = new Date()
      this.transactions.push(this.transaction)
      localStorage.setItem("transactions", JSON.stringify(this.transactions));
  }
  getTransactions(): dataCard[] {
      this.transactions = JSON.parse(localStorage.getItem('transactions'));
        return this.transactions
  }
  deleteTransaction(index: number) {
      this.transactions.splice(index, 1)
      localStorage.setItem('transactions', JSON.stringify(this.transactions))
  }
  repeatTransaction(index: number) {
      this.transaction = this.transactions[index];
  }
}
