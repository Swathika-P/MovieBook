import  { createSlice} from "@reduxjs/toolkit";

const initialState = {
    bookItem:[]
    
};

const BookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.bookItem = []
            state.bookItem.push(action.payload)
        },
       
    },
});

export const { add }= BookSlice.actions;
export default BookSlice.reducer;