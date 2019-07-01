import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionModelComponent} from './transaction-model/transaction-model.component';
import {HistoryOfTransactionsComponent} from './history-of-transactions/history-of-transactions.component';

const routes: Routes = [
  {path: 'transaction', component: TransactionModelComponent},
  {path: 'history', component: HistoryOfTransactionsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
