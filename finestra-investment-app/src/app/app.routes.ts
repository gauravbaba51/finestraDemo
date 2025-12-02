import { Routes } from '@angular/router';
import { InvestmentList } from './investment-list/investment-list';
import { FindMyInvestment } from './find-my-investment/find-my-investment';
import { AddInvestment } from './add-investment/add-investment';
import { Modifyinvestment } from './modifyinvestment/modifyinvestment';
import { InvDetailsfromStore } from './inv-detailsfrom-store/inv-detailsfrom-store';
import { Login } from './login/login';
import { AuthLayout } from './auth-layout/auth-layout';
import { MainLayout } from './main-layout/main-layout';

// export const routes: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     {path: 'login', component: Login ,children: },
//     {path: 'investmentlist', component: InvestmentList },
//     {path: 'findmyinvestment', component: FindMyInvestment },
//     {path: 'addinvestment', component: AddInvestment },
//     {path: 'modifyInvestment',component:Modifyinvestment},
//     {path: 'fetchListFromStore', component: InvDetailsfromStore}
// ];
export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
  
    // 🔹 Auth layout routes (unauthenticated pages)
    {
      path: '',
      component: AuthLayout,
      children: [
        { path: 'login', component: Login }
      ]
    },
  
    // 🔹 Main layout routes (authenticated pages)
    {
      path: 'dashboard',
      component: MainLayout,
      children: [
        { path: 'investmentlist', component: InvestmentList },
        { path: 'findmyinvestment', component: FindMyInvestment },
        { path: 'addinvestment', component: AddInvestment },
        { path: 'modifyInvestment', component: Modifyinvestment },
        { path: 'fetchListFromStore', component: InvDetailsfromStore }
      ]
    },
  
    // Optional 404 route
    {
      path: '**',
      redirectTo: 'login'
    }
  ];
  