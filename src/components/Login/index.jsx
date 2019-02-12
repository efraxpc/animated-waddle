import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/usersActions'
import { bindActionCreators } from 'redux'
// Components
import LoginForm from './LoginForm'

class Login extends Component {

  render() {
    const { users, errors, loginUser } = this.props
    return (
      <div>
        <LoginForm
          data={{ loginUser: loginUser, users }}
        />
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
