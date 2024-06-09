import { createSlice } from "@reduxjs/toolkit";



export const CATEGORIES = [
    "housing",
    "food",
    "transportation",
    "utilities",
    "clothing",
    "healthcare",
    "personal",
    "education",
    "entertainment",
  ];

  const initialState = CATEGORIES.map((category)=>({ category:category, amount:0}));


  export const budgetsSlice = createSlice({
    name:'budgets',
    initialState:initialState,
    reducers:{
        editBudgets:(state, action)=>{
            const {category, amount} = action.payload;
           let newUpdate = state.find((item)=> item.category === category );
                if(newUpdate){
                    newUpdate.amount = amount;
                }
        }

       
    }
  });

  export const {editBudgets} = budgetsSlice.actions;

 const budgetsSliceReducer = budgetsSlice.reducer;

 export default budgetsSliceReducer;

 export const allCategories = (state)=> state.editBudgets;
 console.log(editBudgets)