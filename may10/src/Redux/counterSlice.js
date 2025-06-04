import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState:[],
  
  reducers: {
    

    increment: (state,action) => {
     let existitem=state.find((item)=>item.id===action.payload.id)
     if (existitem) {
      return state.map((item)=>(item.id===action.payload.id?{...item,quantity:item.quantity+1}:item))
     }
     else{
    state.push(action.payload)

     }

    },

     Delete:(state,action)=>{
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
      state.splice(index, 1);
       }
    //  return  state.filter((items)=>items.id!==action.payload.id)
    },
   
    increasing:(state,action)=>{
       return state.map((item)=>(item.id===action.payload.id?{...item,quantity:item.quantity+1}:item))
    },

     decreasing:(state,action)=>{

       return state.map((item)=>(item.id===action.payload.id?{...item,quantity:item.quantity-1}:item))
    }
}
})

export const { increment,Delete,increasing,decreasing} = counterSlice.actions
export default counterSlice.reducer


