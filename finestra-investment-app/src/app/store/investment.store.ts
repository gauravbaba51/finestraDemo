import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals"
import { Investment } from "../models/investment.model"
import { computed, inject } from "@angular/core"
import { ServiceForstore } from "../services/service-forstore"

type InvestmentState = {
    investments: Investment[];
    isLoading: boolean;
    error: string | null;
}

export const InvestmentStore = signalStore(
    { providedIn: 'root' },

    // state 
    withState<InvestmentState>({
        investments: [],
        isLoading: false,
        error: null
    }),


    // derived value 
    withComputed(({ investments }) => ({
        totalInvested: computed(() => investments().reduce((sum, i) => sum + i.amount, 0)),
        totalCurrent: computed(() => investments().reduce((sum, i) => sum + i.currentValue, 0)),
        totalGain: computed(() => {
            const list = investments();
            const invested = list.reduce((sum, i) => sum + i.amount, 0);
            const current = list.reduce((sum, i) => sum + i.currentValue, 0);
            return current - invested;
        })
    })),

    withMethods((store, service = inject(ServiceForstore)) => ({
        async loadAll() {
            patchState(store, { isLoading: true, error: null });
            try {
                const data = await service.getAll();
                patchState(store, { investments: data, isLoading: false });
            } catch (err) {
                patchState(store, {
                    isLoading: false,
                    error: (err as Error)?.message ?? 'Unknown error',
                })
            }
        },

    })),


    withHooks({
        onInit(store){
            store.loadAll()
        }
    })


)
