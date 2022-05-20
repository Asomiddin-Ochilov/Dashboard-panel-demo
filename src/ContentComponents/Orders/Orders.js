
import React, {useEffect} from 'react'
import {Input, Navbar, OrdersTable, Page} from "../../StyledHomejs/StyledComponent";
import './orders.css'
import { AddShopBtn, DeleteShopBtn, SalesBtn} from "../Pages/PageStyled";
import { Select } from 'antd';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch, useSelector} from "react-redux";
import {GetProduct} from "../../Store/Redux/redux";
import {pushCard,FilterCard} from "../../Store/Redux/Cart Reducer";
import ContentLoader from "react-content-loader";
import Description from "../Product/Description";

function Orders(props) {
    const product = useSelector(state => state.Reducer.Product)
    const card = useSelector(state => state.CardReducer.card)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [search1, setSearch1] = React.useState('');
    const [searchDate, setSearchDate] = React.useState('');
    const [category, setCatregory] = React.useState('');
    const [search, setSearch] = React.useState('');
    const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(GetProduct())
    })

    const handleChangePage = (event, newPage) => {

        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const { Option } = Select;

    function onChange(value) {
        setCatregory(value)
        setSearch1('')
    }

    function onSearch(val) {

    }


    function SearchProducts(e) {

        if(e.keyCode===13){
            setCatregory('')
            setSearch1(e.target.value)
            setSearchDate('')
        }

    }

    function SearchOnClick() {
        setSearch1(search)
        setSearchDate('')
        setCatregory('')

    }

    function SearchDate(e) {
        setSearchDate(e)
        setSearch1('')
        setCatregory('')

    }
    function Logout() {
        props.logout('true')
    }

    return(
        <Page>
            <div className="rows">
                <Navbar>
                    <div>
                        <Input type="text"
                               onChange={(e)=>setSearch(e.target.value)}

                               onKeyUp={(e)=>SearchProducts(e)}

                               placeholder={'Search Product'}/>

                        <i className="bi bi-search" onClick={SearchOnClick} ></i>
                    </div>
                     <div className={'logout'} onClick={Logout}>
                         <i className="bi bi-box-arrow-right" style={{fontSize:'25px'}}></i>
                     </div>
                </Navbar>
                <div className={'orders-tablo m-auto'}>
                    <div className={'d-flex align-items-center'}>
                        <h4 className={'my-4 h4'}>Orders</h4>
                        <div className={'mx-2 mt-2'}> {product.length} Orders found</div>
                    </div>

                    <div className={'d-flex align-items-center'}>
                <input className={'input-date'} onChange={(e)=>SearchDate(e.target.value)}   type="date"/>
                    </div>

                </div>
                <OrdersTable>
                    <div className={'category'}>
                        <Select
                            showSearch
                            className={'select'}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}

                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="two">two</Option>
                            <Option value="">vse</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>

                        <NavLink to={'/shopping'}>
                            <SalesBtn> <i className="bi bi-cart3 mx-2"></i> {card.length} </SalesBtn>
                        </NavLink>

                    </div>
                    <div className={'table-row'}>

                        {
                            product.length === 0 ?
                                <div className="content-block">
                                    <ContentLoader
                                        className={'ContentLoader'}
                                        viewBox="0 0 1000 550"
                                        backgroundColor="#eaeced"
                                        foregroundColor="#ffffff"
                                    >
                                        <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
                                        <circle cx="879" cy="123" r="11" />
                                        <circle cx="914" cy="123" r="11" />
                                        <rect x="104" y="105" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="115" rx="3" ry="3" width="100" height="15" />
                                        <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
                                        <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
                                        <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
                                        <circle cx="880" cy="184" r="11" />
                                        <circle cx="915" cy="184" r="11" />
                                        <rect x="104" y="166" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="176" rx="3" ry="3" width="100" height="15" />
                                        <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
                                        <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
                                        <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
                                        <circle cx="881" cy="242" r="11" />
                                        <circle cx="916" cy="242" r="11" />
                                        <rect x="104" y="224" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="234" rx="3" ry="3" width="100" height="15" />
                                        <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
                                        <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
                                        <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
                                        <circle cx="882" cy="303" r="11" />
                                        <circle cx="917" cy="303" r="11" />
                                        <rect x="104" y="285" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="295" rx="3" ry="3" width="100" height="15" />
                                        <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
                                        <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
                                        <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
                                        <circle cx="881" cy="363" r="11" />
                                        <circle cx="916" cy="363" r="11" />
                                        <rect x="104" y="345" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="355" rx="3" ry="3" width="100" height="15" />
                                        <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
                                        <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
                                        <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
                                        <circle cx="882" cy="424" r="11" />
                                        <circle cx="917" cy="424" r="11" />
                                        <rect x="104" y="406" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="416" rx="3" ry="3" width="100" height="15" />
                                        <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
                                        <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
                                        <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
                                        <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
                                        <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
                                        <circle cx="882" cy="484" r="11" />
                                        <circle cx="917" cy="484" r="11" />
                                        <rect x="104" y="466" rx="3" ry="3" width="40" height="40" />
                                        <rect x="160" y="476" rx="3" ry="3" width="100" height="15" />
                                        <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
                                        <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
                                        <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
                                        <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
                                        <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
                                        <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
                                        <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
                                        <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
                                        <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
                                    </ContentLoader>
                                </div>
                                : <table className={'table'}>
                                    <thead className={'thead-1'}>
                                    <tr className={'th'}>
                                        <td className={'th'}>ID</td>
                                        <td className={'th'}>Product Name</td>
                                        <td className={'th'}> Date</td>
                                        <td className={'th'}> Amount</td>
                                        <td className={'th'}> Description</td>
                                        <td className={'th'}> Price</td>
                                        <td className={'th'}> Status</td>
                                    </tr>
                                    </thead>
                                    <tbody className={'th'}>
                                    {
                                        product.filter((item)=>{

                                            if(category){
                                                return  (item.category === category)
                                            }

                                            if(searchDate){
                                                return (item.amount===searchDate)
                                            }
                                            if(item.productName) {
                                                return item.productName.toLowerCase().indexOf(search1.toLowerCase()) > -1;
                                            }
                                            else {
                                                return item
                                            }

                                        }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((item,index)=>
                                                <tr key={index}>
                                                    <td className={'td'}>{item.id}</td>

                                                    <td className={'td-1'}>
                                                        <img className={'mr-2 mx-2'}
                                                             width={40} height={40}
                                                             src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}
                                                             alt=""/>

                                                        {item.productName !== null  ?`${item.productName.substr(0,10)}...` : item.productName}
                                                    </td>

                                                    <td className={'td'}>{new Date(item.createdAt).toLocaleDateString()}</td>
                                                    <td className={'td'}>{item.amount}</td>
                                                    <td className={'td'}>
                                                        <Description item={item.description}/>
                                                        </td>
                                                    <td className={'td'}>${new Intl.NumberFormat().format(item.price)}</td>
                                                    <td className={'td'}>
                                                        <div className={'d-flex'}>
                                                            {
                                                                card.some((it)=> it.productId===item.id) ? (
                                                                        <DeleteShopBtn onClick={()=>dispatch(FilterCard(item))}>
                                                                            <i className="bi bi-cart-dash-fill"></i>
                                                                        </DeleteShopBtn>

                                                                    )
                                                                    :
                                                                    <AddShopBtn onClick={()=>dispatch(pushCard(item))}>
                                                                        <i className="bi bi-cart-plus-fill"></i>
                                                                    </AddShopBtn>

                                                            }


                                                        </div>


                                                    </td>
                                                </tr>
                                            )
                                    }
                                    </tbody>
                                </table>
                        }


                    </div>


                    <TablePagination
                        className={'pagination'}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={product.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </OrdersTable>
            </div>


        </Page>
    )

}
export default Orders
