import { Component, OnInit } from '@angular/core';
import { dataCard } from '../data-card';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TransactionsStoreService } from '../transactions-store.service';


@Component({
  selector: 'app-transaction-model',
  templateUrl: './transaction-model.component.html',
  styleUrls: ['./transaction-model.component.sass']
})
export class TransactionModelComponent implements OnInit {
  transaction: dataCard = {
    payerCard: '',
    beneficiaryCard: '',
    fio: '',
    forMonth: null,
    forYear: null,
    date: null,
    quantaty: null,
  }
  masks = {
  card: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    date: [/\d/, /\d/],
  }
  errorsInput = {
    showErrors:  false,
    errors:  '',
  }
  cardForm: object = {}

  constructor(public transactionsStoreService: TransactionsStoreService) { }

  onSubmit(card: any) {
      var regex = /_/g;
    this.errorsInput.showErrors = false
    this.errorsInput.errors = ''
    if (regex.test(card.value.payerCard) || regex.test(card.value.beneficiaryCard) || card.value.beneficiaryCard === '' ) {
        this.errorsInput.showErrors = true
        this.errorsInput.errors += '- номер карты (номер карты отправителя)' + ' ';
        return
      } else if (card.value.payerCard.length === 19 && card.value.payerCard === card.value.beneficiaryCard) {
        this.errorsInput.showErrors = true
        this.errorsInput.errors += '- номер карты получателя совпадает с номером карты отправителя' + ' ';
        return
    }
    if (card.value.fio === null) {
      this.errorsInput.showErrors = true
      this.errorsInput.errors += '- фио держателя' + ' ';
      return
    } else if (card.value.fio.length < 4) {
      this.errorsInput.showErrors = true
      this.errorsInput.errors += '- фио держателя' + ' ';
      return
    }
    if (card.value.forMonth === null || card.value.forYear === null) {
      this.errorsInput.showErrors = true
      this.errorsInput.errors += '- активна до' + ' ';
      return
    } else if (regex.test(card.value.forMonth) || regex.test(card.value.forYear)) {
      this.errorsInput.showErrors = true
      this.errorsInput.errors += '- активна до' + ' ';
      return
    }
    if (card.value.quantaty === null) {
      this.errorsInput.showErrors = true
        this.errorsInput.errors += '- сумма' + ' ';
      return
    } else if (card.value.quantaty.length < 1) {
      this.errorsInput.showErrors = true
      this.errorsInput.errors += '- сумма' + ' ';
      return
    }

    this.transactionsStoreService.setTransaction(card.value)
  }

  ngOnInit(): void {
    this.transaction = this.transactionsStoreService.transaction
    this.cardForm = new FormGroup({
      'payerCard': new FormControl(this.transaction.payerCard, Validators.required),
      'beneficiaryCard': new FormControl(this.transaction.beneficiaryCard, Validators.required),
      'fio': new FormControl(this.transaction.fio, Validators.required),
      'forMonth': new FormControl(this.transaction.forMonth, Validators.required),
      'forYear': new FormControl(this.transaction.forYear, Validators.required),
      'quantaty': new FormControl(this.transaction.quantaty, Validators.required)
    });

    this.transaction = this.transactionsStoreService.transaction
    this.transactionsStoreService.getTransactions()
  }

}
