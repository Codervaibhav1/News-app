import { createContext, useReducer } from "react";
import { HealthReducer } from "./HealthReducer";

const HealthContext = createContext()

export const HealthProvider = ({children})=>{

    const initainState ={
        Healths:[],
    }
  const [state , hdispatch] = useReducer(HealthReducer ,initainState)

    return(
        <HealthContext.Provider value={{ ...state , hdispatch}}>
            {children}
        </HealthContext.Provider>
    )
}



export default HealthContext;