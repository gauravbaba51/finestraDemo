import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InvestmentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finestra-investment-app');
}
