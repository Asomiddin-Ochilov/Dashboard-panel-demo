import React, {useEffect} from 'react'
import { Page} from "../../StyledHomejs/StyledComponent";
import {HistoryGroup, HistoryItem} from "./HistoryStyled";
import imgs from './online-shopping.png'
import './History.css'
import TablePagination from "@mui/material/TablePagination";
import {useDispatch, useSelector} from "react-redux";
import {GetHistorys} from "../../Store/Redux/History";
import ContentLoader from "react-content-loader";
function History() {
     const  dispatch = useDispatch()
    const history = useSelector(state => state.HistoryReducer.history)
    const [page, setPage] = React.useState(0);
    const [searchDate, setSearchDate] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = React.useState(9);
    const [useHistory, setHistory] = React.useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(()=>{
        dispatch(GetHistorys())
    })

    function SearchDates(e) {

        setSearchDate(e.target.value)

    }

    return(
        <Page>
            <div className={'orders-tablo'}>
                <div className={'d-flex align-items-center'}>
                    <h4 className={'my-4 h4'}>History</h4>
                    <div className={'mx-2 mt-2'}> {history.length}  found</div>
                </div>
                <div className={'d-flex align-items-center'}>
                    <input className={'input-date'}
                           onChange={(e)=>SearchDates(e)}   type="date"/>
                </div>
            </div>
            <HistoryGroup>

                {
                    history.length===0 ?
                        <div className={'history-load'}>
                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>

                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>

                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>

                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>

                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>

                        <ContentLoader className={'history-loader'} viewBox="0 0 400 460">

                            <rect x="0" y="60" rx="2" ry="2" width="400" height="460" />
                        </ContentLoader>


                    </div>
                        :
                        (
                    history.filter((item)=>{

                        if(item.createdAt){

                        return item.createdAt.substring(0, 10).toLowerCase().indexOf(searchDate.toLowerCase()) > -1

                        }

                        else{

                        return item

                        }
                    }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item,index)=> {
                            let date = new Date(item.createdAt)
                            return <HistoryItem key={index}>
                                <img src={imgs} className={'img'} width={100} height={100} alt=""/>
                                <br/>

                                <div className={'date-div'}>
                                    <span> Date :
                                        <span className={'date-span'}>
                                            {item.createdAt.substring(0, 10)}
                                        </span>
                                    </span>

                                    <span>Time : <span

                               className={'date-span'}>
                                        {date.getHours() + 2}:{date.getMinutes()}
                                    </span></span>
                                </div>
                                <div className={'history-table'}>
                                    <div className={'history-thead'}>
                                        <span>ID</span>
                                        <span> Name </span>
                                        <span>amount </span>
                                        <span> price</span>
                                    </div>

                                        {

                                            item.productList.map((it, index) =>
                                          <div className={'history-tbody'} key={it.id}>
                                         <span className={'d-flex'}>{index + 1}.</span>
                                         <span className={'d-flex'}>{it.product.productName.substr(0,5)}</span>
                                        <span className={'d-flex'}>{it.amount}</span>
                                       <span className={'d-flex'}>${new Intl.NumberFormat().format(it.product.price)}</span>
                                   </div>)}

                                </div>
                                <div className={'history-footer'}>
                                <span>amount: <span className={'date-span'}> {item.productList.length}</span>
                                </span> <span> total : <span className={'date-span'}>
                                    $ {new Intl.NumberFormat().format(
                                    item.productList.reduce((total, dev) => {
                                        total += dev.product.price * dev.amount
                                        return total
                                    }, 0)
                                )}</span> </span></div>
                            </HistoryItem>}
                        )
                        )

                }




                <TablePagination
                    className={'pagination'}
                    rowsPerPageOptions={[9 , 24, 99]}
                    component="div"
                    count={history.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </HistoryGroup>

        </Page>
    )

}
export default History