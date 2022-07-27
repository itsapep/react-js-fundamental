import { Component } from "react";

// let Child class consumes data from Parent class
class Child extends Component {
    render() {
        return (
            <div>
                Name : {this.props.name} Age : {this.props.age}
            </div>
        )
    }
}

export default Child;