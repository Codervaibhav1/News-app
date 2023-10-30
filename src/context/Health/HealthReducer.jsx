export const HealthReducer = (state , action)=>{
     switch(action.type){
        case 'HEALTH':
            return{
                ...state,
                Healths: action.payload
            }
     }
}