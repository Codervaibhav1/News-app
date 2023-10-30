export const NewsReducer = (state , action)=>{
switch(action.type){
 case 'GET_DATA':
    // console.log(action.payload)
    return{
        ...state,
        newsAll: action.payload
        
    }
    
    default:
        return state
}
}