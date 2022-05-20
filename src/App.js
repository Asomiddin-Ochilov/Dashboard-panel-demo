import React, {useEffect} from 'react'
import SideBar from "./SideBar/Sidebar";
import './App.css'
import {Container, Content, MobilBar} from "./StyledHomejs/StyledComponent";
import Dashboard from "./ContentComponents/Pages/Page";
import CreateProduct from "./ContentComponents/CreateProduct/CreateProduct";
import History from "./ContentComponents/History/History";
import Orders from "./ContentComponents/Orders/Orders";
import Product from "./ContentComponents/Product/Product";
import Card from "./ContentComponents/Shoping Card/Card";
import {Switch,Route,NavLink,useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetProduct} from "./Store/Redux/redux";
import useLocalStorage from "react-use-localstorage";
import SingIn from "./ContentComponents/SingUp/SingIn";
function App() {
    const product = useSelector(state => state.ReducerEditandDelete.pat)
    const [item, setItem] = useLocalStorage('name', 'true');
    const dispatch = useDispatch()
    const history = useHistory

    useEffect(()=>{

        dispatch(GetProduct())
        
    },[product])

  return (
      <div style={{width:'100%'}}>
          {
              // item  === 'false' ? <SingIn log={setItem} history={history}/> :

                  <Container>
                  <SideBar set={item}  log={setItem}/>
                  <Content>
                      <Switch>
                          <Route path={'/dashboard'} render={(props) => (<Dashboard {...props} logout={setItem} />)} />
                          <Route path={'/product'}  render={(props) => (<Product {...props} logout={setItem} />)} />
                          <Route path={'/orders'}  render={(props) => (<Orders {...props} logout={setItem} />)} />
                          <Route path={'/create'}  component={CreateProduct} />
                          <Route path={'/history'}  component={History} />
                          <Route path={'/shopping'}  component={Card} />
                          <Route  render={(props) => (<Dashboard {...props} logout={setItem} />)}/>
                      </Switch>
                      <MobilBar>
                          <NavLink className={'nav-link-mobile'} to={'/dashboard'} activeClassName={'mobile-nav-active'}>
                              <i className="bi bi-grid-fill svg-mobile"> </i>
                          </NavLink>
                          <NavLink className={'nav-link-mobile'} to={'/product'} activeClassName={'mobile-nav-active'}>
                              <i className="bi bi-collection-fill svg-mobile"> </i>
                          </NavLink><NavLink className={'nav-link-mobile'} to={'/create'} activeClassName={'mobile-nav-active'}>
                          <i className="bi bi-plus-square-fill svg-mobile"> </i>
                      </NavLink>
                          <NavLink className={'nav-link-mobile'} to={'/orders'} activeClassName={'mobile-nav-active'}>
                              <i className="bi bi-cart-fill svg-mobile"> </i>
                          </NavLink>
                          <NavLink className={'nav-link-mobile'} to={'/history'} activeClassName={'mobile-nav-active'}>
                              <i className="bi bi-folder-fill svg-mobile"> </i>
                          </NavLink>
                      </MobilBar>
                  </Content>

              </Container>
          }

          </div>


  );
}

export default App;
