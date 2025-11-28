import { Routes } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestment } from './find-my-investment/find-my-investment';
import { AddInvestment } from './add-investment/add-investment';
import { Modifyinvestment } from './modifyinvestment/modifyinvestment';
import { InvDetailsfromStore } from './inv-detailsfrom-store/inv-detailsfrom-store';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'investmentlist', component: InvestmentList },
    {path: 'findmyinvestment', component: FindMyInvestment },
    {path: 'addinvestment', component: AddInvestment },
    {path: 'modifyInvestment',component:Modifyinvestment},
    {path: 'fetchListFromStore', component: InvDetailsfromStore}
];
