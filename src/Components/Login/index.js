import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state

    const userDetails = {user_id: userId, pin}

    const url = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1>Welcome Back!!</h1>
          <div className="input-container">
            <label htmlFor="userId">USERID</label>
            <input
              type="text"
              id="userId"
              placeholder="ENTER USERID"
              className="input"
              onChange={this.onChangeUserId}
            />
          </div>
          <div className="input-container">
            <label htmlFor="pin">PIN</label>
            <input
              type="text"
              id="pin"
              placeholder="ENTER PIN"
              className="input"
              onChange={this.onChangePin}
            />
          </div>
          <div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
