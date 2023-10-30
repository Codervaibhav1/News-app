import { WeatherReducer } from "./WeatherReducer";
import { createContext, useReducer} from "react";

const WeatherContext = createContext()

export const WeatherProvider =({children})=>{

const initialState ={
    weathers:[],
}

const [state , wdispatch] = useReducer(WeatherReducer, initialState)

 return(
    <WeatherContext.Provider value={{ ...state, wdispatch}}>
        {children}
    </WeatherContext.Provider>
 )

} 



export default WeatherContext;