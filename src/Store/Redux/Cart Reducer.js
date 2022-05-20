import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export function SoldCard(data){
    console.log(data)
    return (dispatch) =>{
        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/sale/sold',
            method:'POST',
            data
        }).then(res=>{
            dispatch({
                type:Clear.type,
                payload:res.data
            })
        }).catch(err=>{
        alert(err)
        })


    }

}
export function pushCard(data){
    return (dispatch) =>{
        dispatch({
            type:AddCard.type,
            payload:data
        })

    }

}
export function FilterCard(data){
    return (dispatch) =>{
        dispatch({
            type:CardFilter.type,
            payload:data
        })

    }

}
export function DeleteCard(data){
    return (dispatch) =>{
        dispatch({
            type:DeleteFilter.type,
            payload:data
        })

    }

}
export function Count(data){
    return (dispatch) =>{
        dispatch({
            type:Pay.type,
            payload:data
        })

    }

}
export function ClearCard(data){
    return (dispatch) =>{
        dispatch({
            type:Clear.type,
            payload:data
        })

    }

}
const CardReducer = createSlice({
    name:'Card',
    initialState:{
        card:[],
        openSold:false
    },
    reducers: {

        AddCard: (state, action) => {
            const app = {
                productId: action.payload.id,
                productName: action.payload.productName,
                amount: 1,
                price: action.payload.price,
                description:action.payload.description
            }
            state.card.push(app)
        },

        CardFilter: (state, action) => {
            console.log(action.payload)
            // eslint-disable-next-line array-callback-return
            console.log(state.card)
            state.card.map((item, index) => {
                if (item.productId === action.payload.id) {
                    state.card.splice(index, 1)
                }
            })
        },

        DeleteFilter: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.card.map((item, index) => {
                if (item.productId === action.payload.productId) {
                    state.card.splice(index, 1)
                }
            })
        },

        Pay:(state, action) => {
            // eslint-disable-next-line array-callback-return
            state.card.map((item, index) => {
                if (item.productId === action.payload.id) {
                    state.card[index].amount = parseInt(action.payload.count)
                }
                if (item.amount === 0) {
                    state.card.splice(index, 1)
                }
            })
        },

        Clear:(state, action) => {
            state.card = []
            state.openSold = true
            console.log(state.openSold)


        }
    }

})

export const {AddCard,CardFilter,DeleteFilter,Pay,Clear} =  CardReducer.actions
export default CardReducer.reducer
