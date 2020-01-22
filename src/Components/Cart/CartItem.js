import React from 'react'
import DEL from '../../delete.png'
export default function CartItems({ item, value }) {
const{id,title,img,price,total,count}=item;
const{ increment, decrement, removeItem}=value;
return(
<div className="row my-2 text-capitalize text-center" >
<div className="col-10 mx-auto col-lg-2">
<img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="product"></img>
</div>


<div className="col-10 mx-auto col-lg-2">
<span className="d-lg-none">Product:</span>
{title}
</div>

<div className="col-10 mx-auto col-lg-2">
<span className="d-lg-none">Price:</span>
{price}
</div>

<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
<div className="d-flex justify-content-center">

<div>
<span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
<span className="btn btn-black mx-1">{count}</span>
<span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
</div>
</div>
</div>
<div className="col-10 mx-auto col-lg-2">
<button onClick={()=>removeItem(id)}>
<img src={DEL} alt="store" className="navbar-brand"/></button>
</div>


<div className="col-10 mx-auto col-lg-2">
<strong>item total : $ 
{total} </strong>
</div>

</div>


)
}