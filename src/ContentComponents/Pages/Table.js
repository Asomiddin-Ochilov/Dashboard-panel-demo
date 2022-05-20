import React, {useEffect} from 'react'
import './PageCss.css'
import {DeleteBtn} from "./PageStyled";
import {useDispatch, useSelector} from "react-redux";
import {GetProduct} from "../../Store/Redux/redux";

function Tbody() {
    const soldProduct = useSelector(state => state.DashboardReducer.soldTable)
    console.log(soldProduct)
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(GetProduct())

    })

    return(
     <table className={'table responsive-table'}>
         <thead className={'thead'}>
         <tr className={'th'}>
             <td className={'th'}>ID</td>
             <td className={'th'}>Product Name</td>
             <td className={'th'}> Date</td>
             <td className={'th'}> Amount </td>
             <td className={'th'}> Price</td>
             <td className={'th'}> Status</td>
         </tr>
         </thead>

         {
             soldProduct.map((item)=><tbody key={item.id} className={'th'}>

             {item.productList.map((ite,index)=><tr key={index}>
                 <td className={'td'}>{ite.product.id}</td>
                 <td className={'td-1'}>
                     <img className={'mx-2'}
                          width={40} height={40}
                          src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${ite.product.imageId}`}
                          alt=""/>
                     {ite.product.productName}
                 </td>
                 <td className={'td'}>{new Date(item.createdAt).toLocaleDateString()}</td>
                 <td className={'td'}>{ite.amount}</td>
                 <td className={'td'}>${new Intl.NumberFormat().format(ite.product.price)}</td>
                 <td className={'td'}>
                     <div className={'d-flex'}>

                         <DeleteBtn>
                             Sold out

                         </DeleteBtn>
                     </div>

                 </td>
             </tr>)}

             </tbody>)
         }


     </table>
    )

 }
 export default Tbody