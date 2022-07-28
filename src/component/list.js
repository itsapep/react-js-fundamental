import { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products : [`Soap`,`Shampoo`,`Tooth Brush`]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(p => <li>{p}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;