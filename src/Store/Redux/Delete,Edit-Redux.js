import {createSlice} from "@reduxjs/toolkit";
import 'react-lite-toast/dist/index.css'
import axios from "axios";
export function DeleteProduct(data){
    return (dispatch) =>{
 axios({
     url:'https://store-management-backend-app.herokuapp.com/api/v1/product/'+data,
     method:'delete'
 }).then(res=>{
            dispatch({
                type:DeleteProducts.type,
                payload:res.data
            })
        }).catch(err=>{
       alert(err)
        })

    }

}

export function EditProduct(data){


    return (dispatch) =>{

        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/product/'+data.id,
            method:'PUT',
            data
        }).then(res=>{
            dispatch({
                type:EditProducts.type,
                payload:res.data
            })
            console.log(res.data)

        }).catch(err=>{
            console.log(err)
        })

    }

}
const ReducerEditandDelete = createSlice({
    name:'Product',

    initialState:{
        pat:true
    },

    reducers:{
        EditProducts:(state,action)=>{
          state.pat = !state.pat

        },
        DeleteProducts:(state,action)=>{
            state.pat = !state.pat
        }
    }
})
export const {DeleteProducts,EditProducts} =  ReducerEditandDelete.actions
export default ReducerEditandDelete.reducer