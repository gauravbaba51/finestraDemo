import { Component, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap, of, finalize, catchError } from 'rxjs';
import { Investment } from '../models/investment.model';
import { Investmentservice } from '../services/investmentservice';
import { FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
type investmentFormsModel = {
  id: FormControl<string>
  name: FormControl<string>;
  type: FormControl<'Equity' | 'Debt' | 'Mutual Fund'>;
  amount: FormControl<number>;
  purchaseDate: FormControl<string>;
  currentValue: FormControl<number>;
}

@Component({
  selector: 'app-modifyinvestment',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './modifyinvestment.html',
  styleUrl: './modifyinvestment.css',
})
export class Modifyinvestment {

  private readonly fb = inject(NonNullableFormBuilder)
  private readonly investmentService = inject(Investmentservice);

  isSubmitting = signal(false);
  serverError = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  investmentForm = this.fb.group<investmentFormsModel>({
    id: this.fb.control('0', { validators: [Validators.required, Validators.min(1)] }),
    name: this.fb.control('', { validators: [Validators.required, Validators.minLength(2)] }),
    type: this.fb.control('Equity'),
    amount: this.fb.control(0, { validators: [Validators.required, Validators.min(1)] }),
    purchaseDate: this.fb.control('', { validators: [Validators.required] }),
    currentValue: this.fb.control(0, { validators: [Validators.required, Validators.min(0)] }),
  });

  get f() {
    return this.investmentForm.controls;
  }

  onSubmit() : void{
    this.serverError.set(null);
    this.successMessage.set(null);

    if(this.investmentForm.invalid) {
      this.investmentForm.markAllAsTouched();
      return;
    }

    const payload: Investment = this.investmentForm.getRawValue();     

    if (this.investmentService.investment().some(inv => inv.id === payload.id)) {
      this.serverError.set('Investment with this ID already exists. Please use a different ID.'); 
      return;
    }

    this.isSubmitting.set(true);


    this.investmentService.addFreshInvestment(payload).subscribe({
      next: (response) => {
        this.successMessage.set(`Investment details modified successfully. (ID : ${response.id})`);
        this.investmentForm.reset({
          id: '0',
          name: '',
          type: 'Equity',
          amount: 0,
          purchaseDate: '',
          currentValue: 0
        });
      }, 
      error: (error) => {
        this.serverError.set('Failed to modify investment details. Please try again.');
      },
      // finalize: () => {
      //   this.isSubmitting.set(false);
      // }
    })
      





    // this.investmentService.addFreshInvestment(this.investmentForm.value as Investment).subscribe({
    //   next: (response) => {
    //     this.successMessage.set('Investment details modified successfully.');
    //     this.investmentForm.reset();
    //   },
    //   error: (error) => {
    //     this.serverError.set('Failed to modify investment details. Please try again.');
    //   }
    // });


  }

}
