import React, { Component } from 'react'

import Title from './Title'
import Product from './Product'

import {ProductConsumer} from '../Context'
export default class Productlist extends Component {
    

    render(){
return(

<React.Fragment>
<div className="py-5">
<div className="container">
<Title name="OUR" title="PRODUCT"></Title>
<div className="row">
    <ProductConsumer>
{value=>{return value.products.map(product=>{
return <Product key={product.id} product={product}></Product>;

});

}}

    </ProductConsumer>


</div>
</div>
</div>
</React.Fragment>

);
}
}