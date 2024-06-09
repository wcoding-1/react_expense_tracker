
import Transition from './Transition';


function TransitionList({transitions}){
    return (
        <>
        {
            transitions.map((transition)=> <Transition t={transition}/>)
        }
            
        </>
    )
}

export default TransitionList