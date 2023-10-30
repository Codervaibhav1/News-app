import { createContext, useReducer } from "react";
import { ScienceReducer } from "./ScienceReducer";

const ScienceContext = createContext()
 
export const ScienceProvider = ({children})=>{

const scienceSatate = {
    sciences :[]
}

const [state , sdispatch] = useReducer(ScienceReducer , scienceSatate)

    return(
<ScienceContext.Provider value={{...state , sdispatch}}>
    {children}
</ScienceContext.Provider>

    )
}





export default ScienceContext