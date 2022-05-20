import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export function GetProduct(){
    return (dispatch) =>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/product',
            method:'GET'
        }).then(res=>{
            dispatch({
                type:GetProducts.type,
                payload:res.data
            })
        }).catch(err=>{
                alert('xato')
            })

    }

}

export function AddProduct(data){
    return (dispatch) =>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/product',
            method:'POST',
            data
        }).then(res=>{
            dispatch({
                type:AddProducts.type,
                payload:res.data
            })
          alert('errrrrr')
        }).catch(err=>{
            alert(err)
        })

    }

}

const Reducer = createSlice({
    name:'Product',
    initialState:{
        Product:[],
        PieCharts:null,
    },
    reducers:{
        GetProducts:(state,action)=>{

            state.Product = action.payload.sort((a, b) => {
                if (a.id < b.id) return -1
                if (a.id > b.id) return 1

                return 0

            })

            // eslint-disable-next-line array-callback-return
            console.log(action.payload)
            const category = action.payload.map((item)=>{

                if(item.category !== state.Product.map((item)=>item.category)){

                    return item
                }
            })
            console.log(category)
            // eslint-disable-next-line array-callback-return
            const as = category.filter((item)=>{
                const q = 0
                if(item.category !==null && item.amount !==  q ){

                    return item
                }
            })

            // const randomColor = Math.floor(Math.random()*16777215).toString(16);

                state.PieCharts=[
                        ['Task', 'Hours per Day'],
                    ...as.map((item) =>  [item.category, item.amount])
                      ]
        },
        AddProducts:(state,action)=>{
            state.Product.unshift(action.payload)
        },

    }

})

export const {GetProducts,AddProducts,DeleteProducts} =  Reducer.actions
export default Reducer.reducer
