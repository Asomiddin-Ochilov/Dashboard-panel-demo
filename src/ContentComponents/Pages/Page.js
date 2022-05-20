import React, {useEffect,useState,useRef} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {
    Card,
    CategoryChart,
    Chart1,
    Chart2,
    Input,
    Navbar,
    Page,
    Table, Tablo
} from "../../StyledHomejs/StyledComponent";
import {Block, Box, BoxChild, H5, SPAN} from "./PageStyled";
import { FaHandHoldingUsd,FaShoppingCart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Charts from "./Charts";
import './PageCss.css'
import LineCharts from "./LineCharts";
import Tbody from "./Table";
import PieCharts from "./PieChart";
// eslint-disable-next-line no-unused-vars
import {GetProducts,  GetWeekProduct, GetWeeks, GetYesterday} from "../../Store/Redux/Dashboard";
function Dashboard(props) {
   // const date = new Date(Date.now()).toISOString()
    const dispatch = useDispatch()
    const dashboard = useSelector(state => state.DashboardReducer.dashboard)
    const yesterday = useSelector(state => state.DashboardReducer.sat)
    // eslint-disable-next-line no-undef
    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);
    // useEffect(() => setCount(count + 1));

    const countRef = useRef(0);
        countRef.current++;
useEffect(()=>{
    dispatch(GetProducts())
    dispatch(GetWeeks())
    dispatch(GetWeekProduct())
},[value])
    let w  = 0
    let s = 0
    let y = 0
    let x = 0
    dashboard.map((item)=>{

          item.productList.forEach(it =>{
              return   w += parseInt(it.product.price)
        })

        item.productList.forEach(it =>{
            return  s += parseInt(it.amount)
        })

        return item
    })



    yesterday.map((item)=>{

        item.productList.forEach(it =>{
            return  y += parseInt(it.product.price)
        })

        item.productList.forEach(it =>{
            return  x += parseInt(it.amount)
        })

       return item
    })


    function Hisob(o,y) {
      return(y % 100  ) + o

    }
    function Foiz(o,y,d) {

       if(y < d){

           return d - y + o
       }
       else{
           return y- d - o
       }


    }

    function Logout() {
       props.logout('true')
    }


    return(

          <Page>
              <Navbar>
                  <div>
                      <Input type="text" placeholder={'Search Product'}/>
                      <i className="bi bi-search"> </i>
                  </div>
                  <div className={'logout'} onClick={Logout}>
                      <i className="bi bi-box-arrow-right" style={{fontSize:'25px'}}> </i>
                  </div>
              </Navbar>
              <Tablo>
                  <h4 className={'my-4 h4'}>Dashboard</h4>

              </Tablo>

              <br/>
              <Card>
                  <Block className={'Block1'}>
                      <i className="bi bi-currency-dollar"> </i>
                  </Block>
                  <H5>${new Intl.NumberFormat().format(w)}</H5>

                  <SPAN>Today Sales
                      {Hisob(0,w)  <  Hisob(0,y) ?


                          <Box className={'box-11'}>
                              <BoxChild className={'boxChild2'}>
                                  <i className="bi bi-arrow-down-right"> </i>
                              </BoxChild>
                              <div className={'box2'}>
                                  - {Foiz(0,Hisob(0,y),Hisob(0,w))} %
                              </div>
                          </Box>


                          :

                          <Box>
                              <BoxChild className={'boxChild1'}>
                                  <i className="bi bi-arrow-up-right"> </i>
                              </BoxChild>
                              <div className={'box1'}>

                                  + {Foiz(0,Hisob(0,y),Hisob(0,w))} %

                              </div>

                          </Box>



                      }

                  </SPAN>

              </Card>
              <Card>
                  <Block className={'Block2'}>
                      <FaHandHoldingUsd/>
                  </Block>
                  <H5>$   {new Intl.NumberFormat().format(32020)}    </H5>
                  {/*{new Intl.NumberFormat().format(w)}*/}
                  <SPAN className={'mx-2'}>Today Expenses
                      <Box className={'box-11'}>
                          <BoxChild className={'boxChild2'}>
                              <i className="bi bi-arrow-down-right"> </i>
                          </BoxChild>
                          <div className={'box2'}>
                              - 10%
                          </div>
                      </Box>
                  </SPAN>
              </Card>
              <Card>
                  <Block className={'Block3'}>
                      <IoIosPeople/>
                  </Block>
                  <H5>{dashboard.length}</H5>

                  <SPAN>Today Visitors

                      {Hisob(0,dashboard.length)  <  Hisob(0,yesterday.length) ?


                          <Box className={'box-11'}>
                              <BoxChild className={'boxChild2'}>
                                  <i className="bi bi-arrow-down-right"> </i>
                              </BoxChild>
                              <div className={'box2'}>
                                  - {Foiz(0,Hisob(0,yesterday.length),Hisob(0,dashboard.length))} %
                              </div>
                          </Box>


                          :

                          <Box>
                              <BoxChild className={'boxChild1'}>
                                  <i className="bi bi-arrow-up-right"> </i>
                              </BoxChild>
                              <div className={'box1'}>
                                  + {Foiz(0,Hisob(0,yesterday.length),Hisob(0,dashboard.length))} %

                              </div>

                          </Box>
                      }

                  </SPAN>
              </Card>
              <Card>
                  <Block  className={'Block4'}>
                      <FaShoppingCart/>
                  </Block>
                  <H5>{s}</H5>

                  <SPAN>Today Orders
                      {Hisob(0,s)  <  Hisob(0,x) ?


                          <Box className={'box-11'}>
                              <BoxChild className={'boxChild2'}>
                                  <i className="bi bi-arrow-down-right"> </i>
                              </BoxChild>
                              <div className={'box2'}>
                                  - {  parseInt(Foiz(0,Hisob(0,x),Hisob(0,s)))-1} %
                              </div>
                          </Box>


                          :

                          <Box>
                              <BoxChild className={'boxChild1'}>
                                  <i className="bi bi-arrow-up-right"> </i>
                              </BoxChild>
                              <div className={'box1'}>

                                  + {Foiz(0,Hisob(0,x),Hisob(0,s))} %

                              </div>

                          </Box>
                      }
                  </SPAN>
              </Card>
              <Chart1>
                  <h5 className={'h5 h4'}>Sales Overview</h5>
                  <br/>
                  <Charts/>
              </Chart1>
              <Chart2>
                  <h5 className={'h5 h4'}>Analytics</h5>
                  <LineCharts/>
              </Chart2>
              <Table>
                  <h5 className={'h5 mt-3 h4'}>Recent Orders</h5>
                  <Tbody/>
              </Table>
              <CategoryChart>
                  <h5 className={'my-3 mx-4 h4'}>Visit Costumers</h5>
                  <PieCharts/>


              </CategoryChart>

          </Page>

    )

}
export default Dashboard
