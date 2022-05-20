
import styled from 'styled-components'


export const CardTable = styled.div`
width: calc(67%);
margin-top: 1rem;
//display: flex;
//flex-wrap: wrap;
height: calc(95%);
overflow-y: auto;
overflow-x: auto !important;
border-radius: 10px;
background: white;
&::-webkit-scrollbar{
width: 0 !important;

}
//&::-webkit-scrollbar-thumb{
//width: 0 !important;
//border-radius: 4px !important;
//background: rgb(69,165,255) !important;
//}
.tbody{
border:1px solid red;
width: calc(100%);
}
@media(min-width: 800px) and (max-width: 1100px){
width: 97%;

}
@media(min-width: 600px) and (max-width: 800px){
width: calc(98%);
}
@media(max-width: 600px){
width: calc(99%);
overflow-x: auto !important;
}
`
export const CardHeader = styled.div`
width: calc(96%);
display: flex;

justify-content: space-between;
align-items: end;
margin: 8px auto;
background: white;
position: sticky;
position: -webkit-sticky;
top: 0;
 font-family: 'Mukta', sans-serif !important;
 font-size: 14px;
 font-weight: 600;

height: calc(50px);
div{
width: calc(20%);
}
.photo{
padding-left: 10px !important;
}
@media(min-width: 800px) and (max-width: 1100px){
margin-left: 13px;
overflow: hidden !important;
width: 98%;
}
@media(min-width: 600px) and (max-width: 800px){
font-size: 14px;
width: calc(100%) ;
margin-left:10px;
}
@media(max-width: 600px){
font-size: 12px;
width: calc(500px);

margin-left:0;
display: flex;
justify-content: space-between;
div{
width: calc(30%) !important;

margin: 0;
}
}
`
export const CardItem = styled.div`
border: 1px solid rgba(213,211,211,0.59);
width: calc(96%);
display: flex;
overflow: hidden;
justify-content: space-between;
align-items: center;
border-radius: 10px;
font-family: 'Mukta', sans-serif !important;
letter-spacing: 1px;
    font-weight: 600;
    font-size: 13px;
height: calc(80px);
color: #656363;
margin: 8px auto;
img{
margin-left: 14px;
border-radius: 7px;
}
div{
width: calc(20%);

//display: flex;
//flex-wrap: wrap;
overflow-y: hidden;
}

@media(max-width: 600px){
div{
width: calc(30%) !important;

font-size: 10px;

}
img{
margin-left: 4px;
}
width: calc(500px);

}
`
export const CardPrice = styled.div`
border-radius: 10px;
margin-top: 1rem;
background: white;
width: calc(30%);
height: calc(370px);
.price-footer{
display: flex;
justify-content: center;
}
@media(min-width: 800px) and (max-width: 1100px){
width: 97%;
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(98%);
}
@media(max-width: 600px){
width: calc(99%);
}
`
export const Total = styled.div`
width: calc(90%);
height: calc(65%);
margin: 10px auto;
display: flex;
align-items: end;
justify-content: space-between;
.total-menu{
width: calc(47%);
height: calc(80%);
text-align: end;
font-size: 18px;
font-weight: 500;
font-family: 'Prompt', sans-serif;
div{
margin: 7px 0;
}
}
.total-price{
width: calc(47%);
height: calc(80%);

font-size: 18px;
font-weight: 500;
font-family: 'Prompt', sans-serif;
div{
margin: 7px 0;
}
}
`
export const InputCard = styled.input`
outline: none;
border: 1px solid #c2bfbf;
border-radius: 10px;
width: calc(70px);
padding-left: 10px;
height: calc(36px);
color: #08295c;
font-size: 18px;
font-weight: 600;
@media(max-width: 600px){
width: calc(55px);
}
`
export const DeleteBtn = styled.button`
outline: none;
border: 1px solid #ee726d;
border-radius: 10px;
width: calc(50px);
height: calc(40px);
color: #ee726d;
float:right;
margin-right: 13px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
padding-top: 3px;
background: white;
&:hover{
transition: 0.5s;
background: #ee726d;
color: white;
}

@media(max-width: 600px){
width: calc(40px);
margin-right: 4px;
}
`
export const AllClear = styled.button`
width: 90px;
height: 40px;
border: none;
border-radius: 8px;
outline: none;
background: #D8514B;
margin: 10px 10px;
color: white;
font-size: 15px;
font-weight: 500;
font-family: 'Montserrat', sans-serif;

`
export const Checkout = styled.button`
width: 100px;
height: 40px;
border: none;
border-radius: 8px;
outline: none;
margin: 10px 10px;
background: #ED774D;
color: white;
font-size: 15px;
font-weight: 500;
font-family: 'Montserrat', sans-serif;
`
export const SoldBlock = styled.div`
width: calc(100%);
height: calc(350px);
display: flex;
flex-wrap: wrap;
justify-content: center;

`
export const SoldHeader = styled.div`
width: calc(90%);
height: 120px;
background: rgb(194,211,255);
border-radius: 10px;
margin-top: 1.4rem;
display: flex;
justify-content: center;
align-items: center;
`
export const SoldBody = styled.div`
width: calc(80%);
height: 80px;
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 22px;
color: #5d626a;
 font-family: 'Montserrat', sans-serif;
`
export const SoldCloseBtn = styled.button`
border: none;
outline: none;
width: calc(35%);
height: 50px;
border-radius: 10px;
color: white;
font-size: 18px;
font-weight: 600;
text-align: center;
transition: 0.4s;
background: #644AF6;
&:hover{
background: #4A38A7;
transition: 0.4s;
}
`
