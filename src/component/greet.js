import { Component } from "react";

class Greet extends Component {
    constructor(props) {
        super(props);
        console.log(props.initialValue);
        // state is an object
        this.state = {name : props.initialValue}
    }

    change() {
        this.setState({name : this.props.initialValue})
    }

    render() {
        return (
            <div>
                <h2>This is {this.state.name}</h2>
                <button onClick={this.change.bind(this)}>Press Button</button>
            </div>
        )
    }
}

export default Greet;