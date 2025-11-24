import { Injectable, signal } from '@angular/core';
import { Investment } from '../models/investment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Investmentservice {

  private apiUrl = 'http://localhost:3000/investments';

  investment = signal<Investment[]>([]);
  // create readonly signal to get the total number of investments
  // investmentList =this.investment.asReadonly()

  constructor(private http: HttpClient) { }

  loadInvestments() {
    this.http.get<Investment[]>(this.apiUrl).subscribe((data) => {
      this.investment.set(data);
    });
  }
}
