import { Component } from "react";

class FormList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem : '',
            list : []
        }
    }

    handleChange(key, value) {
        this.setState({
            [key] : value
        })
    }

    handleSubmit = () => {
        const newItem2 = {
            id : 1 + Math.random(),
            value : this.state.newItem
        }
        this.setState({
            list : [...this.state.list, newItem2],
            newItem : '' // this will clear textbox after clicking submit button
        })
    }

    render() {
        let listItem = this.state.list.map((nameItem) => {
            return <li key={nameItem.id}>{nameItem.value}</li>
        })

        return (
            <div>
                <label>
                    <input type='text' name='name' value={this.state.newItem} onChange={(e) => this.handleChange('newItem', e.target.value)}/>
                </label>
                <button type="submit" value='submit' onClick={this.handleSubmit}>Add</button>
                <ul>{listItem}</ul>
            </div>
        )
    }
}

export default FormList;