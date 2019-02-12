import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser, resetLoginErrors } from '../../actions/usersActions'
import { bindActionCreators } from 'redux'
// Components
import LoginForm from './LoginForm'

class Login extends Component {

  render() {
    const { users, loginUser, resetLoginErrors } = this.props
    return (
      <div>
        <LoginForm
          data={{ loginUser, users, resetLoginErrors }}
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
      loginUser,
      resetLoginErrors
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
