import styled from 'styled-components'

export const Sidebar = styled.div`
background: #ffffff;
color: white;
width: calc(18%);
height: calc(100%);
position: relative;
display: block;

@media(max-width: 800px){
display: none;
}
@media(min-width: 800px) and (max-width: 1100px){
width: calc(30%);

}
`
export const SideLogo = styled.div`
width: calc(100%);
height: calc(60px);
color: black;
display: flex;
justify-content: center;
align-items: end;
font-size: 25px;

`
export const SideBarItem = styled.div`
border-radius: 10px;
width: calc(90%);
height: 60px;

display: flex;
align-items: center;
padding-left: 10px;
font-size: 19px;
font-weight: 500;
font-family: 'Poppins', sans-serif;
//background: #cfeff5;
color: #9c9b9b;
margin: 1rem auto;
&:hover{
background:#EDF6FF ;
cursor:pointer;
}
`
export const LoginOut = styled.div`
//border: 1px solid red;

position:absolute;
top: 90%;
left: 7%;
border-radius: 10px;
width: calc(90%);
height: 60px;
margin: auto !important;
display: flex;
align-items: center;
padding-left: 10px;
font-size: 18px;
font-weight: 500;
font-family: 'Poppins', sans-serif;
transition: 0.1s;
color: gray;
&:hover{
cursor:pointer;
color: black !important;
font-weight: 600;
margin-left: 10px;
font-size: 20px;
}

`