import {Component} from 'react';

// Props
// when parent component pass a read-only values to child component
// props in class becomes a property
class BodyComponent extends Component {
    // class needs to render 
    render() {
        return (
            <>
                <h1>Body Component</h1>
                <p>Welcome {this.props.secondName}</p>
            </>
        )
    }
}

export default BodyComponent;