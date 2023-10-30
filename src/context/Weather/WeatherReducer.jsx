export const WeatherReducer = (state , action)=>{
     
    switch(action.type){
        case 'WEATHER':
            // console.log(action.payload)
            return{
                ...state,
                weathers : action.payload
            }
    }


}