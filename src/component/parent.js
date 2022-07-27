import { Component } from "react";
import Child from "./child";

// parent class Parent passes value to child component Child
class Parent extends Component {
    render() {
        return (
            <div>
                <Child name={this.props.name} age={this.props.age}/>
            </div>
        )
    }
}

export default Parent;