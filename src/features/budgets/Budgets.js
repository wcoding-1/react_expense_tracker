import Budget from "../../component/Budget";
import { useSelector, useDispatch } from "react-redux";
import { allCategories } from "./BudgetsSlice";
export function Budgets(){
    const allCategory = useSelector(allCategories)
    return(
        <>
       
        {
            allCategory.map((cat)=>(<Budget budget={cat}/>))
        }
        
        </>
    )
}

export default Budgets