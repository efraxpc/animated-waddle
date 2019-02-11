import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, reduxForm } from 'redux-form'

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

const CustomTextField = ({ input, label, type }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="email">{label}</InputLabel>
    <Input type={type} {...input} />
  </FormControl>
)

class LoginForm extends Component {
  onSubmit = values => {
    const { dispatch, reset, data:{ loginUser }} = this.props
    dispatch(reset('login'))
    loginUser(values)
  }
  renderInput = ({ input }) => <input {...input} type="text" />
  render() {
    const { classes } = this.props
    const { handleSubmit } = this.props
    console.log(this.props)
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="email"
              type="text"
              component={CustomTextField}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              label="Password"
              component={CustomTextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(
  reduxForm({
    form: 'login'
  })(LoginForm)
)
