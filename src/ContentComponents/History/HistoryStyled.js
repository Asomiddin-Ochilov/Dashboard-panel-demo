import styled from 'styled-components'

export const
    HistoryGroup = styled.div`
width: calc(97%);
height: calc(87vh);
display: flex;
flex-wrap: wrap;
justify-content: space-around;

border-radius: 10px;
background: white;
overflow-y: auto;
&::-webkit-scrollbar{
width: 3px;
}
@media(max-width: 600px){
width: calc(100%);
.pagination{

margin-left: 0;
}
}
@media(min-width: 600px) and (max-width: 800px){
.pagination{

margin-left: 40%;
}
}
@media(min-width: 800px) and (max-width: 1100px){
.pagination{

margin-left: 40%;
}
}
`
export const HistoryItem = styled.div`
width: calc(30%);
margin: 2rem 0;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
justify-content: center;
height: calc(440px);
background: rgb(249,248,248);
@media(max-width: 600px){
width: calc(90%);
}
@media(min-width: 600px) and (max-width: 800px){
width: calc(45%);
}
@media(min-width: 800px) and (max-width: 1100px){
width: calc(45%);
}
`