import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestment } from './find-my-investment/find-my-investment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InvestmentList, FindMyInvestment],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finestra-investment-app');
}
