import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Investment } from '../models/investment.model';
import { Investmentservice } from '../services/investmentservice';

@Component({
  selector: 'app-add-investment',
  imports: [FormsModule],
  templateUrl: './add-investment.html',
  styleUrl: './add-investment.css',
})
export class AddInvestment {

  purchaseDate: string = "2025-11-26"; 
  apiservice = inject (Investmentservice)

  addInvestment: Investment = {
    name: '',
    type: 'Equity',
    amount: 0,
    purchaseDate: "",
    currentValue: 0
  };

  onDropdownChange() {
    console.log('Selected value:', this.addInvestment);
    // You can perform further actions with this.selectedValue here
    this.apiservice.addFreshInvestment(this.addInvestment).subscribe((response) => {
      console.log('Investment added successfully:', response);
      // Optionally, reset the form or provide feedback to the user
    })

  }



}
