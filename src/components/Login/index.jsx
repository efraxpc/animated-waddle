import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/usersActions'
import { bindActionCreators } from 'redux'
// Components
import LoginForm from './LoginForm'

class Login extends Component {
  loginUser = async values => {
    await this.props.loginUser(values)
    if (this.props.users.user) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <LoginForm data={{loginUser:this.loginUser}} />
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
