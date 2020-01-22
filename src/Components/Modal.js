import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
export default class Modal extends Component {
render(){
return(
<ProductConsumer>
    {
(value)=>{
const {modalOpen,closeModal}=value;
const{img,title,price}=value.modalProduct;
if(!modalOpen){
return null;
} 
else{
    return(
<ModalContainer>
<div className="Container">
<div className="row">
    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-10 ">

<h5>item added to the cart</h5>
<img src={img} className="img-fluid" alt="product"></img>
    <h5>{title}</h5>
<h5 className="text-muted">Price : $ {price}</h5>
<Link to='/'>
<ButtonContainer onClick={()=> closeModal()}>Store</ButtonContainer>
</Link>

<Link to='/Cart'>
<ButtonContainer cart onClick={ ()=> closeModal() }>Cart</ButtonContainer>
</Link>


    </div>
</div>
</div>
</ModalContainer>
    );
}
}
}
</ProductConsumer>

)
}
}
const ModalContainer=styled.div`
position:fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainwhite)
}

`;
const ButtonContainer=styled.button`
text-transform:capitalize;
font-size:2.3rem;
border:0.05rem solid var(--lightblue);
border-color:${props =>(props.cart? "var(--mainyellow)": "var(--lightblue)")};
background:transparent;
color:${prop =>(prop.cart? "var(--mainyellow)": "var(--lightblue)")};
border-radius:0.5rem;
padding:0.4rem;
cursor:pointer;
margin:0.2rem;
transition:all 0.4s ease-in-out;
&:hover{
background:${prop =>(prop.cart? "var(--mainyellow)": "var(--lightblue)")};
color:var(--mainblue);


`;
