import styled from 'styled-components'


export const Block1 = styled.div`

width: calc(66%);
background: white;
margin-top: 1rem;
border-radius: 10px;
height: calc(96vh);
overflow-y: auto;
&::-webkit-scrollbar{
width: 3px;
}
box-shadow: 0 0 10px 0 rgba(196,191,191,0.55);
.label-input-2{
display: none;
}
.label-input{
width: calc(100%);
}
.description{
margin-left: 19px;
}
@media(max-width: 600px){
display: none;
}
//@media(min-width: 600px) and (max-width: 800px){
//.description{
//margin-left: 7px;
//}
//width: calc(98%);
//height: calc(60%) !important;
//.label-input{
//display: none;
//}
//.label-input-2{
//display: block;
//}
//}
//@media(max-width: 600px){
//.description{
//margin-left: 7px;
//}
//width: calc(98%);
//height: calc(60%) !important;
//.label-input{
//display: none;
//}
//.label-input-2{
//display: block;
//}
//}
`

export const Block2 = styled.div`

width: calc(30%);
//border: 1px solid red;
margin-top: 1rem;
border-radius: 10px;
height: calc(95vh);
.label-input-2{
display: none;
}
.box{
border: 1px solid rgba(248,246,246,0.42);
width: calc(100%);
background: white;
height: calc(70vh);
border-radius: 10px;
box-shadow: 0 0 10px 0 rgba(196,191,191,0.55);
}
.ant-select-selector{
width: calc(100%) !important;
margin-left: 12px !important;
//border: 1px solid red !important;
height: 61px !important;
margin-top: 0.3rem;
border-radius: 10px !important;
font-size: 20px !important;
padding-top: 0.8rem !important;
}
.ant-select select ,.ant-select-single{
width: calc(93%) !important;
font-size: 20px !important;
}
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector{
    border: 1px solid rgba(37,137,184,0.76) !important;
    box-shadow: 0  0 0 4px  rgba(151,210,238,0.76) !important;
}
@media(max-width: 600px){
display: none;
}
//@media(min-width: 600px) and (max-width: 800px){
//width: calc(98%);
//.label-input-2{
//display: block;
//}
//.box{
//height: calc(96vh);
//}
//display: block;
//margin-top: -60px;
//}
//@media(max-width: 600px){
//width: calc(98%);
//.label-input-2{
//display: block;
//}
//.box{
//height: calc(96vh);
//}
//display: block;
//margin-top: -60px;
//
//}
`

export const Description = styled.div`
//border-top: 1px solid rgb(206,212,218);
//border-right: 1px solid rgb(206,212,218);
//border-bottom: 0;
//border-left: 1px solid rgb(206,212,218);
border-radius: 10px;
width: calc(94%);
height: 190px;
overflow: hidden;
margin: auto;


`
export const AddImg = styled.div`
border: 1px dashed rgb(206,212,218);
border-radius: 10px;
width: calc(94%);
height: 160px;
display: flex;
justify-content: center;
align-items: center;
margin:  auto;
background: #f6f6f6;
h5{
font-weight: 700;
}
p{
font-size: 14px;
font-weight: 500;
color: #9e9a9a;
}
`
export const Labels = styled.div`
width: calc(100%);
height: 20px;
padding-top: 2px;
color: #585858;

padding-left: 12px;
font-size: 18px;
font-weight: 600;

`
export const AddProductBtn = styled.button`
width: calc(100%);
height: 50px;
border: none;
outline: none;
border-radius: 10px;
margin-top: 2rem;
background: #4BA85E;
color: white;
font-size: 19px;
font-weight: 600;
&:hover{
transition: 0.5s;
background: #398649;
}
@media(max-width: 600px){
width: calc(95%);
margin-bottom: 1rem;
margin-left: 10px;
}
`
export const BlockMobile = styled.div`
background: white;
width: calc(30%);

margin-top: 1rem;
border-radius: 10px;
display: none;
padding-top: 2rem;
@media(max-width: 600px){
display: block;
width: calc(98%);
margin: 1rem auto;
}
`