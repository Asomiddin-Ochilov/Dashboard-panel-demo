
import styled from 'styled-components'

export const Container = styled.div`
 width: calc(100%) !important;
 display: flex;
 height: calc(100vh);
 
`
export const Content = styled.div`
width: calc(100%);
overflow: auto;

`
export const Navbar = styled.div`
width: calc(100%) !important;
height: calc(58px);
position: sticky;
background: white;
position:-webkit-sticky;
display: flex;
padding: 0;
z-index: 2 !important;
.logout{
display: none;
width: 50%;
height: 40px;
margin: auto;
cursor: pointer;
@media(min-width: 0) and (max-width: 800px){
display: flex;
}
align-items: center;
justify-content: end;
padding-right: 15px;
}
div{
position:relative;
width: 23%;
}
@media(min-width: 800px) and (max-width: 1100px){
div{
width: 30%;
}
}
@media(max-width: 800px){
div{
width: 50%;
}
}
top: 0;


`
export const Page = styled.div`
width: calc(100%);
overflow: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background: rgba(239,236,236,0.36);
height: calc(100%) !important;
padding: 0 !important;
&::-webkit-scrollbar{
width: 2px;
}
@media(max-width: 800px){
padding-bottom: 4.2rem  !important;
}

`
export const OrdersTable = styled.div`

width:calc(100%);
display: flex;
flex-wrap: wrap;
justify-content: center;
@media(max-width: 600px){
.category{
display: flex;
justify-content: space-between;


}

.ant-select-selector{
width: 150px !important;
}
.ant-select select ,.ant-select-single{
width: 150px !important;
}
.pagination{
margin-left:0;

}
.MuiTablePagination-selectLabel{
font-size: 15px !important;
}
.MuiTablePagination-displayedRows{
font-size: 14px !important;
}

.orders-table{
width: 50% !important;
}
overflow: hidden;
}
@media (min-width: 600px) and (max-width: 800px){
.pagination{
margin-left: 34%;
}

}
@media(min-width: 800px)and (max-width: 1100px){
.pagination{
margin-left: 34%;
}
.orders-table{
overflow: auto;
}
}
`
export const Card = styled.div`
border-radius: 10px;
width:calc(22%) ;
background: white;
box-shadow: 0 2px 2px 2px rgba(239,236,236,0.38);
height: calc(145px);
@media(min-width: 800px) and (max-width: 1100px){
width: calc(45%);
margin: 0.5rem 0;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(45%);
margin: 0.5rem 0;
}
@media(max-width: 600px){
width: calc(90%);
margin: 0.5rem 0;
}
&:hover{
box-shadow: 0 0 4px 0 #c8c1c1;
}
`
export const Chart1 = styled.div`
//border: 1px solid red;
margin: 2rem 0;
border-radius: 10px;
width:calc(64%) ;
display: flex;
flex-wrap: wrap;
@media(min-width: 800px) and (max-width: 1100px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(max-width: 600px){
width: calc(90%);
margin: 0.5rem 0;
}

align-items: center;
padding-right: 13px;
padding-top: 14px;
background: white;
box-shadow: 0 2px 2px 2px rgba(239,236,236,0.38);
height: calc(60%);
&:hover{
box-shadow: 0 0 4px 0 #c8c1c1;
}
`
export const Chart2 = styled.div`
margin: 2rem 0;
background: white;
//border: 1px solid red;
border-radius: 10px;
padding-left: 5px;
padding-right: 5px;
padding-top: -10px !important;
width:calc(30%) ;
display: flex;
flex-wrap: wrap;
@media(min-width: 800px) and (max-width: 1100px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(max-width: 600px){
width: calc(90%);
margin: 0.5rem 0;
}
align-items: center;
box-shadow: 0 2px 2px 2px rgba(239,236,236,0.38);
height: calc(60%);
&:hover{
box-shadow: 0 0 4px 0 #c8c1c1;
}
`
export const Table = styled.div`
//border: 1px solid red;
background: white;
border-radius: 10px !important;
width:calc(64%) ;
padding-left: 3px ;
padding-right: 3px ;
@media(min-width: 800px) and (max-width: 1100px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(95%);
margin: 0.5rem 0;
}

@media(max-width: 600px){
width: calc(90%);
margin: 0.5rem 0;
overflow-x: auto;
overflow-y: auto;
}
overflow-y: hidden;
overflow-x: auto;
&::-webkit-scrollbar{
    width: 5px !important;
    
 
    background: transparent !important;
}
&::-webkit-scrollbar-thumb{
background: #fcfcfc;

height: 10px !important;
border-radius: 4px !important;

}
box-shadow: 0 2px 2px 2px rgba(239,236,236,0.38);

height: calc(50%);
margin-bottom: 2rem !important;
&:hover{
box-shadow: 0 0 4px 0 #c8c1c1;
}
`
export const CategoryChart = styled.div`

background: white;
//border: 1px solid red;
border-radius: 10px;
width:calc(30%) ;
overflow: hidden;

font-size: 20px !important;
box-shadow: 0 2px 2px 2px rgba(239,236,236,0.38);
height: calc(50%) ;

@media(min-width: 800px) and (max-width: 1100px){
width: calc(95%);
margin: 0.5rem 0;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(95%);
margin-bottom: 1rem !important;
}
@media(max-width: 600px){
width: calc(90%);
//margin: 0.5rem 0;

}
&:hover{
box-shadow: 0 0 4px 0 #c8c1c1 !important;
}
`
export const Input = styled.input`
width: calc(98%);
border-radius: 10px;
border: none;
padding-left: 20px;
outline: none;
margin-top: 8px;
font-size: 14px;
margin-left: 20px;
background: rgb(250,250,250);
 height: 40px;
`
export const MobilBar = styled.div`
display: none;

width: calc(100%);
height: 70px;
position: fixed;
z-index: 3;

background: white;
bottom: 0;

//border-radius: 20px;
@media(max-width: 800px){

display: flex;
justify-content: space-between;

}
`
export const LinkItem = styled.div`

width: calc(10%);
border-radius: 10px;
height: 40px;
margin: auto;
display: flex;
justify-content: center;
color: #a3a3a3;
background: #f5f5f5;
align-items: center;
`
export const Tablo = styled.div`
  width: calc(94%);
  display: flex;
  align-items: center;
  //border: 1px solid red;
  @media(max-width: 800px){
  margin: auto;
  }
`

