import { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        console.log(`componentDidMount dipanggil`);
        this.timeID = setInterval(() => 
            this.tick()
        , 2000);
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
            </div>
        )
    }
}

export default Clock;