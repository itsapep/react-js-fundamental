import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brand : 'Pilih',
            year : 0
        }
    }

    handleChange = (event) => {
        this.setState({
            brand : event.target.value
        })
    }

    handleChangeYear = (event) => {
        this.setState({
            year : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.brand);
        const result = this.state.brand;
        if (result === 'Choose') {
            alert(`Please choose first`);
        } else {
            alert(`name : ${this.state.brand} ${this.state.year}`)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.brand} onChange={this.handleChange}>
                        <option disabled>Choose</option>
                        <option>BMW</option>
                        <option>Honda</option>
                        <option>Ferrari</option>
                    </select>
                    <br/>
                    <label>
                        Year : 
                        {/* <input type='text' placeholder='username' onChange={this.handleChange} value={this.state.brand}/> */}
                        {/* <textarea value={this.state.brand} onChange={this.handleChange}/> */}
                        <input onChange={this.handleChangeYear} value={this.state.year}/>
                    </label>
                    <button type="submit" value='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;