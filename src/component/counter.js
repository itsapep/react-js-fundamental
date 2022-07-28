import { Component } from "react";
import CounterButtonPlus from "./counter_button_plus";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    componentDidMount() { 
        console.log("componentDidMount dipanggil");
    }
    componentDidUpdate() { 
        console.log(`componentDidUpdate dipanggil`);
    } 

    callback = (val) => {
        this.setState({
            number : val
        })
    }

    componentWillUnmount() {
        console.log("componentWillUnMount dipanggil");
    }

    render() {
        console.log(`dari render`, this.state.product);
        console.log(`render is called`);
        return (
            <div>
                <h1 className="text-dark mx-2">{this.state.number}</h1>
                <CounterButtonPlus callback={this.callback} number={this.state.number}/>
                <button onClick={this.props.onNavigate}>Move</button>
                {/* <CounterButtonPlus callback={this.decrement} number={this.state.number}/> */}
            </div>
        )
    }
}

export default Counter;