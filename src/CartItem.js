import React from "react";

class CartItem extends React.Component{
    render(){
        // console.log(this.props)
        const {item,price,qty}=this.props.product
        return(
            <div className="s-flex-row cart">
                <div className="s-width-100 s-col-bg-777">
                    <img/>
                </div>
                <div className="s-flex-col">
                    <div>{item}</div>
                    <div>Rs {price}</div>
                    <div>Qty : {qty}</div>
                    <div className="s-flex-row">
                        <img onClick={()=> this.props.onIncreaseQty(this.props.product)} className="action" src="/images/add.png" />
                        <img onClick={()=> this.props.onDecreaseQty(this.props.product)} className="action" src="/images/minus.png" />
                        <img onClick={()=> this.props.onDelete(this.props.product.id)} className="action" src="/images/bin.png" />
                    </div>
                </div>
            </div>
        );
    }
}
export default CartItem;