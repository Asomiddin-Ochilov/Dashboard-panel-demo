import React from 'react'
import {LoginOut, Sidebar, SideLogo} from "./SideBarStyled";
import {NavLink,useHistory} from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";
import '../App.css'
function SideBar(props) {
  const history = useHistory()
    function LogOut() {
        props.log('true')
         history.push('')
    }

    return(


        <Sidebar>

            <SideLogo>
                E-commerse
            </SideLogo>


                <NavLink className={'nav-link'} to={'/dashboard'} activeClassName={'main-nav-active'}>
                    <i className="bi bi-grid-fill svg"></i>
                    <div className={'mx-3'}>
                        Dashboard
                    </div>
                </NavLink>



            <NavLink className={'nav-link'} to={'/product'} activeClassName={'main-nav-active'}>
                <i className="bi bi-collection-fill svg"></i>
               <div className={'mx-3'}>
                   Products
               </div>
            </NavLink>

            <NavLink className={'nav-link'} to={'/orders'} activeClassName={'main-nav-active'}>
                <i className="bi bi-cart-fill svg"></i>
                <div className={'mx-3'}>
                    Orders
                </div>

            </NavLink>

            <NavLink className={'nav-link'} to={'/create'} activeClassName={'main-nav-active'}>
                <i className="bi bi-plus-square-fill svg"></i>
               <div className={'mx-3'}>
                   Create
               </div>
            </NavLink>
            <NavLink className={'nav-link'} to={'/shopping'} activeClassName={'main-nav-active'}>
                <RiShoppingBag3Fill className={'sales'}  />
               <div className={'mx-3'}>
                   Sales
               </div>
            </NavLink>

            <NavLink className={'nav-link'} to={'/history'} activeClassName={'main-nav-active'}>
                <i className="bi bi-folder-fill svg"></i>
              <div className={'mx-3'}>
                  History
              </div>
            </NavLink>

            <LoginOut >
                <i className="bi bi-box-arrow-right" style={{fontSize:'30px'}}></i>
                   <div className={'mx-2'} onClick={LogOut}>
                       Log Out
                   </div>
            </LoginOut>
        </Sidebar>
    )

}
export default SideBar