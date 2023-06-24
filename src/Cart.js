import React from "react";
import CartItem from "./CartItem.js"

class Cart extends React.Component {
    render() {
        // console.log(this.props)
        const { products } = this.props
        return (
            <div className="s-flex-row">
                <div className="s-flex-col">
                    {products.map((product) => {
                        return <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQty={this.props.onIncreaseQty}
                            onDecreaseQty={this.props.onDecreaseQty}
                            onDelete={this.props.onDelete}
                        />
                    })}
                </div>
                <div className="cart-total s-flex-row">
                    <span>Cart Total</span>
                    <span>:</span>
                    <span>{this.props.total}</span>
                </div>
            </div>
        );
    }
}
export default Cart;