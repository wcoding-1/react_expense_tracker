
import TransitionList from "../../component/TransitionList";
import TransitionForm from "../../component/TransitionForm";
import { selectTransition } from "./TransitionsSlice";
import { useSelector, useDispatch } from "react-redux";


function Transitions(params) {
    const allTran = useSelector(selectTransition);
    // const dispatch = useDispatch()
    // console.log(allTran[0])
    return(
        <>
         
            <h2>Transition Information</h2>
            <div className="transitions_info">
                <TransitionList transitions={allTran}/>  
            </div>
            <div className="transition_input">
                <TransitionForm/>
            </div>
        </>
    )
}

export default Transitions