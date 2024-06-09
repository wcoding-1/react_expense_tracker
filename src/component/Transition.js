import { useDispatch } from "react-redux";
import { deleteTransition } from "../features/transitions/TransitionsSlice";

 function Transition({t}){
    const dispatch=useDispatch()
    const onDeleteTran = (term)=>{
        dispatch(deleteTransition(term));

    }
    return(
        <>
      
            <div className="tran_list">
             
                <ul key={t.id}>
                    <li>{t.amount} -- {t.category} ({t.description})</li>
                </ul>

                <div className="tran_del_btn">
                <button 
                className="tran_delte_btn"
                onClick={()=>onDeleteTran(t)}
                >X</button>
              
            </div>
                
            </div>

          
            
        </>
    )
}

export default Transition;