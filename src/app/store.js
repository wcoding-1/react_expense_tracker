import { configureStore } from "@reduxjs/toolkit";
import budgetsSliceReducer from "../features/budgets/BudgetsSlice";
import transitionsReducer from "../features/transitions/TransitionsSlice";

const store = configureStore({
    reducer:{
        editBudgets: budgetsSliceReducer,
        transitions: transitionsReducer

    }
});

export default store;
