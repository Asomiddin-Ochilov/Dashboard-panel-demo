import styled from 'styled-components'


export const EditBlock = styled.div`
position: relative;
width: calc(100%);
height: calc(590px);
overflow-y: auto;
.edit-img{
margin-left: 42%;
margin-top: 1.5rem;
}
&::-webkit-scrollbar{
width: 2px;
}
.avForm{
margin: 0 auto !important;
}
.avForm-2{
margin: 0 auto !important;
}
.avForm-1{
margin: 0 auto !important;
}
.toggle-modal{
color: #c4c1c1;
position: absolute;
top: 1rem;
right: 1rem;
font-size: 20px;
&:hover{
cursor:pointer;

}
}
`
export const EditSaveBtn = styled.button`
width: calc(40%);
height: 50px;
border: none;
outline: none;
border-radius: 10px;
margin-top: 1rem;
margin-bottom:  1rem;
margin-left: 30%;
background: #1D83D4;
color: white;
font-size: 19px;
font-weight: 600;
&:hover{
transition: 0.5s;
background: #1567a8;
}
@media(max-width: 600px){
width: calc(95%);
margin-bottom: 1rem;
margin-left: 10px;
}
`
export const DeleteBlock = styled.div`
width: calc(100%);
height: calc(300px);
`
export const DeleteBtn = styled.button`
border: none;
outline: none;
background: rgb(221,107,85);
color: white;
width: calc(40%);
height: 40px;
margin: 0 10px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
`
export const CloseBtn = styled.button`
border: none;
outline: none;
background: rgb(193,193,193);
color: white;
width: calc(30%);
height: 40px;
margin: 0 10px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
`