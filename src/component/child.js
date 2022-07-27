import { Component } from "react";

// let Child class consumes data from Parent class
class Child extends Component {
    // event Handler
    handleClick = () => {
        this.props.callback("change from child")
    }

    render() {
        return (
            <div>
                <div>Name : {this.props.name} Age : {this.props.age}</div>
                <button className="btn btn-primary my-2"
                        onClick={this.handleClick}>Change message
                </button>
                <div>{this.props.message}</div>
            </div>
        )
    }
}

export default Child;