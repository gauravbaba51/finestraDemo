import { Component, inject } from '@angular/core';
import { InvestmentStore } from '../store/investment.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-inv-detailsfrom-store',
  imports: [CurrencyPipe],
  templateUrl: './inv-detailsfrom-store.html',
  styleUrl: './inv-detailsfrom-store.css',
})
export class InvDetailsfromStore {

  readonly store = inject(InvestmentStore)
}
