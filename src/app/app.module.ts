import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { TransactionModelComponent } from './transaction-model/transaction-model.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryOfTransactionsComponent } from './history-of-transactions/history-of-transactions.component';
import { TransactionContainerComponent } from './transaction-container/transaction-container.component';
@NgModule({
    declarations: [
        AppComponent,
        TransactionModelComponent,
        HistoryOfTransactionsComponent,
        TransactionContainerComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        TextMaskModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
