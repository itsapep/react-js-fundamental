import { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products : [
                {id:1,brand:`Soap`},
                {id:2,brand:`Shampoo`},
                {id:3,brand:`Tooth Brush`}
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(p => <li key={p.id}>key = {p.id}, brand = {p.brand}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;