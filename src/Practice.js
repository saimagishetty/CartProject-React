import React from "react";

class Practice extends React.Component {
    constructor() {
        super();
        this.state = {
            total: 1
        }
    }
    increase = () => {
        console.log("hello")
        this.setState({
            total : this.state.total+=1
        })
    }
    render() {
        let { total } = this.state
        return (
            <div>
                <button
                    onClick={this.increase}>
                    +
                </button>
                <div>{total}</div>
            </div>
        )
    }

}
export default Practice;