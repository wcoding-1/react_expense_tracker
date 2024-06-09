import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {CATEGORIES} from '../features/transitions/TransitionsSlice';
import { addTransition } from "../features/transitions/TransitionsSlice";
import { randomId } from "./randomId";


function TransitionForm(params) {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);


    const dispatch = useDispatch()

    const onHandleTransition = (e)=>{
        e.preventDefault();

        if(category === "" || description ==="" || amount === ""){
           return
        }
        
        dispatch(addTransition({
            category:category,
            description:description,
            amount:parseFloat(amount),
            id:randomId()
        }));

       
        setCategory(CATEGORIES[0]);
        setDescription('');
        setAmount(0);

    }
    return(
        <>
            <form onSubmit={onHandleTransition}>
                <div id="transition_form">
                    <div id="select_form">
                        <label htmlFor="cat">Category</label><br/><br/>
                        <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                            <option value="select" disabled>Select</option>
                            {CATEGORIES.map((category)=><option>{category}</option>)}
                            
                        </select>

                    </div> 

                    <div id="des">
                        <label htmlFor="des">Description</label><br/><br/>
                        <input type="type" name="des" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                    </div>

                    <div id="amoun_Input">
                        <label htmlFor="amount">Amount</label><br/><br/>
                        <input type="number" name="amount" step='0.01' onChange={(e)=>setAmount(e.target.value)} value={amount}/>
                    </div>
                    ^
                </div>
                <button type="submit" className="submit">Add Transition</button>
            </form>
        </>
    )
}

export default TransitionForm;