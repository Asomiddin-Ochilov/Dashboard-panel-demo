import styled from 'styled-components'

export const Block = styled.div`

width: 45px;
height: 45px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: #3434ea;
margin-top: 1rem;
margin-left: 1rem;
font-size: 25px;
@media(max-width: 800px){
margin:1rem auto;
}

`
export const H5 = styled.h5`
margin-top: 1rem;
margin-left: 1rem;
font-family: 'Josefin Sans', sans-serif;
font-weight: 600;
@media(max-width: 800px){
text-align: center;
margin-left: 0 !important;
}
`
export const SPAN = styled.div`
font-family: 'Quicksand', sans-serif;
width: calc(100%);
display: flex;
font-weight: 600;
color: gray;
justify-content: space-around;
.box-11{
width: calc(40%);
display: flex;
justify-content: space-around;
margin-right: 15px;
}
`
export const Box = styled.div`
width: calc(40%);
display: flex;
justify-content: space-around;
`
export const BoxChild = styled.div`
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;

border-radius: 50%;

`
export const EditBtn = styled.button`
outline: none;
border: none;
width: calc(25%);
height: 28px;
font-size: 17px;
display: flex;
margin: 0 10px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: rgb(255,187,40);
color: white;
@media(max-width: 800px){
width: calc(30px) !important;
margin-left: 0;
}
`
export const DeleteBtn = styled.div`
outline: none;
border: none;
//width: calc(30%);
height: 28px;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
opacity: 0.8;
//background: rgb(252,99,96);
background: white;
color: #259552;
font-weight: bold;
@media(max-width: 800px){
width: calc(30px) !important;
}
`

export const CreateBtn = styled.button`
border: none;
outline: none;
width: 140px;
height: 35px;
margin-right: 13px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Maven Pro', sans-serif;
border-radius: 10px;
background: #45A5FF;

@media(max-width: 600px){
width: 100px;
margin-right: 10px;
}
`
export const SalesBtn = styled.button`
border: none;
outline: none;
width: 140px;
height: 35px;
margin-right: 13px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Maven Pro', sans-serif;
border-radius: 10px;
background: #45A5FF;
font-size: 18px;

@media(max-width: 600px){
width: 100px;
margin-right: 10px;
}
`
export const EditBtnOrders = styled.button`
outline: none;
border: none;
width: calc(29%);
height: 30px;
display: flex;
font-size: 17px;
margin-right: 10px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: rgb(255,187,40);
padding-top: 4px;
color: white;
&:hover{
font-size: 14px;
}
@media(max-width: 800px){
width: calc(30px) !important;
margin-left: 0;
}
@media(min-width: 800px) and (max-width: 1100px){
width: 40%;
}
`
export const DeleteBtnOrders = styled.button`
outline: none;
border: none;
width: calc(29%);
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-size: 17px;
padding-top: 4px;
background: rgb(252,99,96);
color: white;
&:hover{
font-size: 14px;
}
@media(max-width: 800px){
width: calc(30px) !important;
}
@media(min-width: 800px) and (max-width: 1100px){
width: 40%;
}
`
export const AddShopBtn = styled.button`
outline: none;
border: none;
width: calc(32%);
height: 30px;
display: flex;
margin-right: 10px;
font-size: 17px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: rgb(202,236,222);
color: rgb(64,189,132);
&:hover{
font-size: 14px;
}
@media(max-width: 800px){
width: calc(30px) !important;
margin-left: 0;
}
@media(min-width: 800px) and (max-width: 1100px){
width: 26%;
}
`
export const DeleteShopBtn = styled.button`
outline:none;
border: none;
width: calc(32%);
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-size: 17px;
background: rgb(254,216,215);
color: rgb(253,126,147);
&:hover{
font-size: 14px;
}
@media(max-width: 800px){
width: calc(30px) !important;
}
@media(min-width: 800px) and (max-width: 1100px){
width: 26%;
}
`