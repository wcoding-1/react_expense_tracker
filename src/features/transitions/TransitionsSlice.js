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

  const initialState = Object.fromEntries(CATEGORIES.map((category)=>[category, []]));


  const budgetsSlice = createSlice({
    name:'transitions',
    initialState:initialState,
    reducers:{
        addTransitions:(state, action)=>{
            const {category} = action.payload;
            state[category].push(action.payload);      
        },

        deleteTransition:(state, action)=>{
         
         const {category, id} = action.payload;
         state[category] = state[category].filter((transition)=> transition.id != id)
      
    }
  }
  })

   const transitionsReducer = budgetsSlice.reducer;
   export default transitionsReducer
  export const addTransition = budgetsSlice.actions.addTransitions;
  export const deleteTransition = budgetsSlice.actions.deleteTransition;
  export const selectTransition = (state)=> Object.values(state.transitions).reduce((a, b) => [...a, ...b], []);
  export const reduceTransition =(state)=> state.transitions; 
  

