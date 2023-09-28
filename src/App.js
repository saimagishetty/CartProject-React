import React from "react";
import './App.css';
import Nav from './Nav.js';
import Cart from './Cart.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          item: "watch",
          price: 69,
          qty: 3,
          id: 1
        },
        {
          item: "laptop",
          price: 69,
          qty: 6,
          id: 2
        },
        {
          item: "mobile phone",
          price: 69,
          qty: 7,
          id: 3
        },
        {
          item: "bottle",
          price: 120,
          qty: 7,
          id: 4
        }
      ]
    }
  }
  // handeldeleteQuantity
  handeldeleteQuantity = (id) => {
    const { products } = this.state
    const items = products.filter((item) => item.id !== id)
    this.setState({
      products: items
    })
  }
  // handelDecreaseQuantity

  handelDecreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product);
    if(products[index].qty == 0){
      return
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handelIncreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  total_Count = () => {
    const { products } = this.state
    let totalCount = 0;
    for (let a of products) {
      totalCount += a.qty
    }
    console.log(totalCount)
    return totalCount
  }
  cartTotal = () => {
    const { products } = this.state
    let cart_total = 0
    for (let a of products) {
      cart_total += a.qty * a.price
    }
    return cart_total
  }
  render() {
    // this.total_Count()
    return (
      <div className="App" >
        <Nav
          total={this.total_Count()}
        />
        <div className="body-main">
          <Cart
            total={this.cartTotal()}
            products={this.state.products}
            onIncreaseQty={this.handelIncreaseQuantity}
            onDecreaseQty={this.handelDecreaseQuantity}
            onDelete={this.handeldeleteQuantity}
          />
        </div>
      </div>
    );
  }
}
export default App;
