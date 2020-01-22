import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotal'
export default class Cart extends Component {
render(){
return(
<section>
<ProductConsumer>
    {
        value=>{
            const {cart}=value;
            if(cart.length>0){
                return(
                    <React.Fragment>
     <Title name="Your" title="Cart"></Title>
      <CartColumns/>
      <CartList value={value}></CartList>
      <CartTotal value={value}></CartTotal>
      </React.Fragment>
                );
            }
            else{
                return <EmptyCart/>;
            }
        }
    }
</ProductConsumer>

    
</section>

);
}
}