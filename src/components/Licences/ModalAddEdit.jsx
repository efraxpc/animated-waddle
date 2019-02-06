import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'react-bootstrap'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const CustomTextField = ({ input, label, type }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="email">{label}</InputLabel>
    <Input type={type} {...input} />
  </FormControl>
)
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: 'user'
      }}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)
class ModalAddEdit extends React.Component {
  onSubmit = values => {
    const {
      dispatch,
      reset,
      data: { saveLicence }
    } = this.props
    saveLicence({id:values.user})
    dispatch(reset('modadAddEdit'))
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  render() {
    const {
      data: { open, handleClose, users },
      handleSubmit
    } = this.props
    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={'md'}
          fullWidth={true}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Grupos de LABOCER SA</DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent>
              <Row>
                <Col md={6}>
                  <Field name="user" component={renderSelectField} label="User">
                    <option value="">--Seleccione--</option>
                    {users
                      ? users.users.map((user, i) => (
                          <option value={user._id}>{user.email}</option>
                        ))
                      : null}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 2, offset: 8 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Guardar
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}>
                    Cancelar
                  </Button>
                </Col>
              </Row>
            </DialogContent>
          </form>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default reduxForm({
  form: 'modadAddEdit'
})(ModalAddEdit)
