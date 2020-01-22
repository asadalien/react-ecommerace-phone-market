import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import cartt from '../cartts.png'
import styled from 'styled-components'
export default class Navbar extends Component {
render(){
return(
<NavWraper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

<Link to='/'>
    <img src={logo} alt="store" className="navbar-brand"></img>
</Link>
<ul className="navbar-nav align-items-center">
<li className="nav-item ml-5">
    <Link to="/" className="nav-link">
        Products
    </Link>
</li>

</ul>
<Link to="/Cart" className="ml-auto">
<ButtonContainer>
<span >

<img src={cartt} alt="store" className="navbar-brand"/>

</span>
Store

</ButtonContainer>


</Link>
</NavWraper>

) 
}
}
const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:2.3rem;
border:0.05rem solid var(--lightblue);
background:transparent;
color: var(--mainwhite);
border-radius:0.5rem;
padding:0.4rem;
cursor:pointer;
margin:0.2rem;
transition:all 0.4s ease-in-out;
&:hover{
background:var(--lightblue);
color;var(--mainblue);
`
const NavWraper=styled.nav`
Background:var(--mainblue);

.nav-link{

    color:var(--mainwhite) !important;
    font-size:1.5rem;
    text-transform:capitalize !important;
}



`
