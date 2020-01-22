import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
export default class Details extends Component {
render(){
return(
<ProductConsumer>
{
(value)=>{
const{id,company,img,info,price,title,inCart}= value.detailProduct;
return(
<div className="container py-5">
    <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
<h1>{title}</h1>
        </div>
    </div>
    
<div className="row">
    <div className="col-10 mx-auto col-med-6 my-3 text-capitalize">
<img src={img} className="img-fluid" alt="product"></img>

    </div>

    <div className="col-10 mx-auto col-med-6 my-3 text-capitalize">
<h2>Model: {title}</h2>
<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
made by: <span className="text-uppercase">{company}</span>
</h4>
<h4 className="text-blue">
<strong>price: <span>$ : {price}</span></strong>
</h4>
<p className="text-capitalize font-weight-bold mt-3 mb-0"> Some info about product :</p>
<p className="text-muted lead">{info}</p>
<div>
<Link to='/'>
<ButtonContainer >
    Back To Products
</ButtonContainer>

</Link>

<ButtonContainer cart disabled={inCart ? true :false} onClick={
()=>{

    value.addToCart(id);
    value.openModal(id);
}

}>
    {inCart ? "InCart " : "Add To Cart"}
</ButtonContainer>


</div>
    </div>
</div>


</div>


)
}


}

</ProductConsumer>
)
}
}

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


`
