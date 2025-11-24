import { Component, computed, inject, signal } from '@angular/core';
import { Investmentservice } from '../services/investmentservice';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, finalize, of, switchMap } from 'rxjs';
import { Investment } from '../models/investment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-my-investment',
  imports: [CommonModule],
  templateUrl: './find-my-investment.html',
  styleUrl: './find-my-investment.css',
})
export class FindMyInvestment {

  private svc = inject(Investmentservice);

  id = signal<number | null>(null);
  loading = signal(false);
  error = signal("");

   btnId :number | null = 0

  private id$ = toObservable(this.id).pipe(
    debounceTime(150),
    distinctUntilChanged()
  );

  investment = toSignal<Investment | null>(
    this.id$.pipe(
      switchMap(id => {
        this.error.set("");
        if (id === null || Number.isNaN(id)) {
          this.loading.set(false);
          return of(null);
        }
        this.loading.set(true);
        return this.svc.getInvestmentsById(id).pipe(
          finalize(() => {
            this.loading.set(false);
          }),
          catchError((err) => {
            console.log("getInvestment Error: ", err);
            this.error.set("Unable to fetch Investment. Please check the ID or Server connectivity.");
            return of(null);
          })
        );
      })
    ),
    { initialValue: null }
  )


  fields =  computed(() => {
    const inv = this.investment();
    if(!inv) return [];   
    
    const inr = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);

    console.log("Investment Fields Computed for: ", inv);
    return [
      { label: 'ID', value: String(inv.id) },
      { label: 'Type', value: inv.type },
      { label: 'Amount', value: inr(inv.amount) },
      { label: 'Purchase Date', value: new Date(inv.purchaseDate).toLocaleDateString('en-IN') },
      { label: 'Current Value', value: inr(inv.currentValue) },
    ];
  });


  // onIdInput(event: Event) : void {
  //   const raw = (event.target as HTMLInputElement).value;
  //   const num = raw === '' ? null : Number(raw);
  //   this.id.set(Number.isFinite(num) ? num : null);
  //   console.log("onIdInput: ", this.id());
  // }


  onIdInput(event: Event) : void {
      const raw = (event.target as HTMLInputElement).value;
      const num = raw === '' ? null : Number(raw);
      this.btnId=num
    }

  onbtnInput(num: number | null) : void {
    this.id.set(this.btnId);
    console.log("onIdInput: ", this.id());
  }
}
