export const ScienceReducer = (state , action)=>{
    switch(action.type){
        case 'SCIENCE':
            return{
                ...state,
                sciences : action.payload
            }
    }

}