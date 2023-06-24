import React from "react";

class Nav extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="nav-bar">
                <div className=" s-p-r-20">
                    <img className="action " src="/images/cart.png" />
                    <span className="text-g">{this.props.total}</span>
                </div>
            </div>
        );
    }
}
export default Nav;