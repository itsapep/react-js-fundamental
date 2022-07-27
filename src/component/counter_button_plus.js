import { Component } from "react";

class CounterButtonPlus extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    buttonPlus = () => {
        let num = this.props.number + 1;
        this.props.callback(num)

    }

    buttonMinus = () => {
        let num = this.props.number - 1;
        this.props.callback(num)

    }

    render() {
        return (
            <div>
                <button onClick={this.buttonPlus}>Increment</button>
                <button onClick={this.buttonMinus}>Decrement</button>
            </div>
        )
    }
}

export default CounterButtonPlus;