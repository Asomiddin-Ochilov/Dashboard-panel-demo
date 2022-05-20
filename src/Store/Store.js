import {configureStore} from '@reduxjs/toolkit'
import Reducer from './Redux/redux'
import ReducerEditandDelete from './Redux/Delete,Edit-Redux'
import CardReducer from './Redux/Cart Reducer'
import HistoryReducer from './Redux/History'
import DashboardReducer from './Redux/Dashboard'
export default configureStore({
reducer:{
 Reducer,
 ReducerEditandDelete,
 CardReducer,
 HistoryReducer,
 DashboardReducer
}
})
