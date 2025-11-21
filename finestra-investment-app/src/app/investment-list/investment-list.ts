import { Component, signal } from '@angular/core';
import { Investment } from '../models/investment.model';
import { Investmentservice } from '../services/investmentservice';

@Component({
  selector: 'app-investment-list',
  imports: [],
  templateUrl: './investment-list.html',
  styleUrl: './investment-list.css',
})
export class InvestmentList {

  allInvestmentList = signal<Investment[]>([]);

  constructor(private investmentService: Investmentservice) { }

  ngOnInit() {
    this.investmentService.loadInvestments();
  }

  displayAllMyInvestments() {
    this.allInvestmentList.set(this.investmentService.investment());
  }
}

// 21st November 2025
 
// Task 1: -
// 	Display the details of all investments from the "allInvestmentList" object
// 	in a tabular format without using the "table" tag.
 
// 	This information should only be displayed when the function "displayAllMyInvestments()"
// 	is invoked at the click of the button.
 
// 	Task 2: -
// 	Refer to the "InvestmentList" component in the "app" component.
