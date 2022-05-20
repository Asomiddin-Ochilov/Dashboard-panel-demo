
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export function GetHistorys() {

        return (dispatch)=> {
            axios({
                url: 'https://store-management-backend-app.herokuapp.com/api/v1/sale/history',
                method: 'GET'
            }).then(res => {

                // eslint-disable-next-line array-callback-return
                const fil =  res.data.filter(item =>{
                    if (item.productList.length !== 0) {
                        return item
                    }

                })

                const  prod = fil.sort((a,b)=>{
                    if(a.createdAt > b.createdAt) return -1
                    if(a.createdAt < b.createdAt) return 1
                    return 0

                })

                dispatch({
                    type: GetHistory.type,
                    payload: prod
                })
            })
        }
}

const HistoryRdeucer = createSlice({
    name:'history',
    initialState:{
        history:[]
    },
    reducers:{
        GetHistory:(state ,action)=>{

            state.history = action.payload
        }
    }

})
export const {GetHistory} = HistoryRdeucer.actions
export default HistoryRdeucer.reducer