
import React, {useEffect} from 'react'
import {Page} from "../../StyledHomejs/StyledComponent";
import {AllClear, CardHeader, CardItem,
    CardPrice, CardTable,
    DeleteBtn, InputCard,
    Total,Checkout} from "./ShoppingStyled";
import {useDispatch,useSelector} from "react-redux";
import {DeleteCard, Count, ClearCard, SoldCard} from "../../Store/Redux/Cart Reducer";
import imgs from './empty-cart-4150967-3437888.png'
import './Popup.css'
import SoldPopup from "./SoldPopup";

function Card() {
    const card = useSelector(state => state.CardReducer.card)
    const ope = useSelector(state => state.CardReducer.openSold)
    const [open, setOpen] = React.useState(false);
     const dispatch = useDispatch()
    const pay = card.reduce((total,dev)=>{
       total += dev.price * dev.amount
        return total
    },0)

    function Prasent(p ,number) {
        return ( p / 100) * number

    }

    function HandelS() {

        dispatch(SoldCard(card))

    }

    useEffect(()=>{
        if(card.length === 0){
            setOpen(true)
        }
        else {
            setOpen(false)
        }

    },[card])


    return(
        <Page>
            {
                card.length === 0 ?  <div className={'empty-card'}>
                    <img className={'img-card'} src={imgs} alt=""/>
                </div>
                    : <div className={'divs'}>
                        <CardTable>
                            <CardHeader>
                                <div className={'photo'}>PHOTO</div>
                                <div>NAME</div>
                                <div>QUANTITY</div>
                                <div>PRICE</div>
                                <div>TOTAL</div>
                                <div></div>
                            </CardHeader>
                            {
                                card.map((item)=> <CardItem>
                                    <div>
                                        <img className={''}
                                             width={50} height={44}
                                             src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}
                                             alt=""/>
                                    </div>

                                    <div>{item.productName.length > 12  ?`${item.productName.substr(0,12)}...` : item.productName} </div>
                                    <div>

                                        <InputCard
                                            onChange={(e)=>dispatch(Count({id:item.productId,count:e.target.value}))}
                                            type="number"
                                            value={item.amount}
                                            min={0}/>

                                    </div>

                                    <div>$ {item.price} </div>

                                    <div>$1.190,90  </div>

                                    <div>

                                        <DeleteBtn onClick={()=>dispatch(DeleteCard(item))}>
                                            <i className="bi bi-trash"></i>
                                        </DeleteBtn>

                                    </div>
                                </CardItem>)
                            }


                        </CardTable>

                        <CardPrice>
                            <h4 className={'mx-4 mt-3 h4'}>Price</h4>
                            <Total>
                                <div className={'total-menu'}>
                                    <div>Sub Total :</div>
                                    <div>Shipping :</div>

                                    <div>Tax(18%) :</div>
                                    <div style={{fontWeight:'600'}}>Total :</div>
                                </div>
                                <div className={'total-price'}>
                                    <div>${pay}</div>
                                    <div>Free</div>
                                    <div>${ parseInt(Prasent(18 , pay))}</div>
                                    <div style={{fontWeight:'600'}}>${pay + Prasent(18,pay)}</div>
                                </div>
                            </Total>

                            <div className={'price-footer'}>

                                <AllClear onClick={()=>dispatch(ClearCard(""))}>All Clear</AllClear>

                                <Checkout onClick={HandelS}>Checkout</Checkout>
                            </div>


                        </CardPrice>



                    </div>

            }
            {
              open ?   <SoldPopup  /> : ''
            }
        </Page>
    )

}

export default Card