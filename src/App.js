import { Component } from 'react';
import './App.css';

const menus = [
  {
    id:`001`,
    menuName:`Nasi Putih`,
    price: 3000
  },
  {
    id:`002`,
    menuName:`Nasi Merah`,
    price: 6000
  },
]

const tables = [
  {
    id:`001`,
    tableNumber:`T001`,
    status: `U`
  },
  {
    id:`002`,
    tableNumber:`T002`,
    status: `A`
  },
]

const errorStyle = {
  color: 'red',
  fontSize: '12px'
}
class MenuForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        id: '',
        menuName: '',
        price: 0
    	}, error: {
				errorid: null,
				errormenuName: null,
				errorprice: null
      },
      isValidForm: false
    }
  }

  componentDidMount() { 
    console.log("menu form mounting");
  }

  componentDidUpdate(prevProps, prevState) { 
    console.log("menu form update");
  }

  handleValidation = (key, value) => {
    let isValid;
    if (value === '') {
      this.setState({
        error: {...this.state.error, [`error${key}`]: 'Field is required'}
      })
      isValid = false;
    } else {
      this.setState({
        error: {...this.state.error, [`error${key}`]: ''}
      })
      isValid = true;
    }
    this.handleFormValidation();
    return isValid
  }

  handleFormValidation = () => {
    this.setState((prevState) => {
      if (prevState.error.errorid === '' && prevState.error.errormenuName === '' && prevState.error.errorprice === '') {
        return {isValidForm: true}
      } else {
        return {isValidForm: false}
      }
    })
  }

  handleInputChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;
    this.setState({
      menu: {
        ...this.state.menu, [key]: val
      }
    })
    this.handleValidation(key, val)
  }

  handleAddMenu = () => {
    menus.push({...this.state.menu});
    console.log(menus);
    this.clearForm();
    this.props.handleFormUpdate();
  }

  clearForm = () => {
    this.setState({
      menu: {
        id: '',
        menuName: '',
        price: 0
      }, 
			error: {
				errorid: null,
				errormenuName: null,
				errorprice: null
      },
      isValidForm: false
    })
  }

  render() {
    const {menu: {id, menuName, price}, error: {errorid, errormenuName, errorprice}, isValidForm} = this.state
    return (
      <>
        <h2>Menu Form</h2>
        <label>ID</label>
        <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                {errorid && <div style={errorStyle}><small>{errorid}</small></div>}
        <br/>
        <label>Menu Name</label>
        <input name='menuName' type='text' value={menuName} onChange={this.handleInputChange}/>
                {errormenuName && <div style={errorStyle}><small>{errormenuName}</small></div>}
        <br/>
        <label>Price</label>
        <input name='price' type='text' value={price} onChange={this.handleInputChange}/>
                {errorprice && <div style={errorStyle}><small>{errorprice}</small></div>}
        <br/>
        <button disabled={!isValidForm} onClick={this.handleAddMenu}>Add</button>
      </>
	
    )
  }
}

class MenuList extends Component {
  onDelete = (id) => {
    const response = window.confirm(`Are you sure want to delete?`)
    if (response) {
      const index = menus.findIndex(menu => menu.id === id);
      menus.splice(index,1);
      this.setState({})
    }
  }
  render() {
    return (
      <>
        <h2>Menu List</h2>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>{menu.menuName} {menu.price} 
                <button onClick={() => this.onDelete(menu.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

class TableForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: {
        id: '',
        tableNumber: '',
        status: 'U'
      },
      error: {
				errorid: null,
				errortableNumber: null
      },
      isValidForm: false
    }
  }

  componentDidMount() { 
    console.log("table form mounting");
  }

  componentDidUpdate(prevProps, prevState) { 
    console.log("table form update");
  }

  handleValidation = (key, value) => {
    let isValid;
    if (value === '') {
      this.setState({
        error: {...this.state.error, [`error${key}`]: 'Field is required'}
      })
      isValid = false;
    } else {
      this.setState({
        error: {...this.state.error, [`error${key}`]: ''}
      })
      isValid = true;
    }
    this.handleFormValidation();
    return isValid

  }

  handleFormValidation = () => {
    this.setState((prevState) => {
      if (prevState.error.errorid === '' && prevState.error.errortableNumber === '') {
        return {isValidForm: true}
      } else {
        return {isValidForm: false}
      }
    })
  }

  handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      table: {
        ...this.state.table, [key]:value
      }
    })
    this.handleValidation(key,value)
  }

  handleAddTable = () => {
    tables.push({...this.state.table});
    console.log(tables);
    this.clearForm();
    this.props.handleFormUpdate();
  }

  clearForm = () => {
    this.setState({
      table: {
        id:``,
        tableNumber:``,
        status:`U`
      },
      error: {
				errorid: null,
				errortableNumber: null
      },
      isValidForm: false
    })
  }

    render() {
        const {table: {id, tableNumber, status}, error: {errorid, errortableNumber}, isValidForm} = this.state
    return (
      <>
        <h2>Table Form</h2>
        <label>ID</label>
        <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                {errorid && <div style={errorStyle}><small>{errorid}</small></div>}
        <br/>
        <label>Table Number</label>
        <input name='tableNumber' type='text' value={tableNumber} onChange={this.handleInputChange}/>
                {errortableNumber && <div style={errorStyle}><small>{errortableNumber}</small></div>}
        <br/>
        <label>Status</label>
        <br/>
        <input name='status' type='radio' value='A' onChange={this.handleInputChange} checked={status === 'A'}/>
        <label>Available</label>
        <br/>
        <input name='status' type='radio' value='A' onChange={this.handleInputChange} checked={status === 'A'}/>
        <label>Unavailable</label>
        <br/>
        <button disabled={!isValidForm} onClick={this.handleAddTable}>Add</button>
      </>
    )
  }
}

class TableList extends Component {
  onDelete = (id) => {
    const response = window.confirm(`Are you sure want to delete?`)
    if (response) {
      const index = tables.findIndex(table => table.id === id);
      tables.splice(index,1);
      this.setState({})
    }
  }
  
  render() {
    return (
      <>
        <h2>Table List</h2>
        <ul>
          {tables.map((table) => (
            <li key={table.id}>{table.tableNumber} {table.status} 
                <button onClick={() => this.onDelete(table.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

function Login(props) {
  return (
    <>
      <h2>WMB Login</h2>
      <button onClick={() => {
        props.handleLoggedIn(true)
      }}>Login</button>
    </>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      isFormUpdated: false
    }
  }

  onLoggedIn = (status) => {
    this.setState({
      isAuthenticated: status
    })
  }

  onUpdateForm = () => {
    this.setState({
      isFormUpdated: true
    })
  }

  render() {
    const {isAuthenticated} = this.state;
    return (
      <>
        {
          isAuthenticated ?
            <>
              <MenuForm handleFormUpdate={this.onUpdateForm}/>
              <MenuList/>
              <TableForm handleFormUpdate={this.onUpdateForm}/>
              <TableList/>
              <button onClick={() => this.onLoggedIn(false)}>Logout</button>
            </>
            :
            <Login handleLoggedIn={this.onLoggedIn}/>
        }
      </>
    );
  }
}

export default App;
