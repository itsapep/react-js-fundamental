import { Component } from "react";
import CounterButtonPlus from "./counter_button_plus";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    callback = (val) => {
        this.setState({
            number : val
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-dark mx-2">{this.state.number}</h1>
                <CounterButtonPlus callback={this.callback} number={this.state.number}/>
                {/* <CounterButtonPlus callback={this.decrement} number={this.state.number}/> */}
            </div>
        )
    }
}

export default Counter;