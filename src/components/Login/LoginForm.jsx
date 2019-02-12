import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  dense: {
    marginTop: 19
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

class LoginForm extends Component {
  state = {
    userMail: '',
    password: ''
  }
  onSubmit = async (e) => {
    e.preventDefault()
    const isValid = this.validate()
    const {
      data: { loginUser},
      history
    } = this.props
    const { userMail, password } = this.state
    if (isValid) {
      await loginUser({ email: userMail, password })
      if (!this.props.data.users.loginError === true) {      
        history.push('/')
      }
    }
  }
  renderInput = ({ input }) => <input {...input} type="text" />
  validate = () => {
    let emailError = ''
    let passwordError = ''
    if (!this.state.userMail.includes('@')) {
      emailError = 'Por favor ingrese un correo válido'
    }

    if (!this.state.password) {
      passwordError = 'Por favor ingrese una contraseña'
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError })
      return false
    }
    return true
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    if(event.target.name === 'password'){
      this.setState({ passwordError: '' })
    }
    if(event.target.name === 'userMail'){
      this.setState({ emailError: '' })
    }
  }
  render() {
    const { classes } = this.props
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <Row>
              <Col md={12}>
                <TextField
                  id="standard-dense"
                  label="Correo *"
                  className={classNames(classes.textField, classes.dense)}
                  style={{ width: '100%' }}
                  margin="dense"
                  name={'userMail'}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.emailError}
                </div>
              </Col>
              <Col md={12}>
                <TextField
                  id="standard-password-input"
                  label="Contraseña *"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  style={{ width: '100%' }}
                  name={'password'}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.passwordError}
                </div>
              </Col>
            </Row>
            {this.props.data.users.loginError === true && (
              <div style={{ fontSize: 12, color: 'red' }}>
                <h6>{this.props.data.users.errorMsg}</h6>
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Iniciar sesión
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}
export default withRouter(withStyles(styles)(LoginForm))
