import { Component } from "react";
import Child from "./child";

// parent class Parent passes value to child component Child
class Parent extends Component {
    state = {
        message : "this is from parent"
    }

    changeMessage = (newMessage) => {
        this.setState({
            message : newMessage
        })
    }

    render() {
        return (
            <div>
                <Child name={this.props.name}
                        age={this.props.age}
                    message={this.state.message}
                    callback={this.changeMessage}/>
            </div>
        )
    }
}

export default Parent;