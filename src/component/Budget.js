import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editBudgets } from "../features/budgets/BudgetsSlice";
import { reduceTransition} from "../features/transitions/TransitionsSlice";

function Budget({budget}){
    const [amount, setAmount] = useState(budget.amount);
    const transitions = useSelector(reduceTransition);
    const dispatch = useDispatch();

    const onHandleEdit = (e)=>{
        e.preventDefault()
        dispatch(editBudgets({category:budget.category, amount: amount}));
    }
   
    const calculateTotalBudget = ()=>{
        return transitions[budget.category]
        .map((transition)=> transition.amount)
        .reduce((amount1,amount2)=>amount1+amount2,0) 
    };

    const getRemainFund =()=>{

    }

    const remainingFund = 
    Number.parseFloat(budget.amount - calculateTotalBudget()).toFixed(2)
    return(
        <>
        <div className="budget_container">
            <div className="budget_label">
                
                <p>category</p>{' '}
                <h2>{budget.category}</h2>

                <div className="remaining-budget">
                    <h3>Funds Remaining: {remainingFund}</h3>
                </div>

            </div>

            <form className="budget_form" onSubmit={onHandleEdit}>
                <input 
                type="number" 
                name="budget"  
                step='0.01' 
                className="update_input"
                onChange={(e)=>setAmount(e.currentTarget.value)}
                />
                <button className="button">Update</button>
            </form>
            
        </div>
        <hr/>
        </>
    )
}

export default Budget;