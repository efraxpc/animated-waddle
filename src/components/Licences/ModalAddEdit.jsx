import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'react-bootstrap'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import moment from 'moment'

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
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
  state = {
    selectedDate: new Date()
  }
  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }
  onSubmit = async values => {
    const {
      dispatch,
      reset,
      data: { saveLicence, handleClose }
    } = this.props
    const { selectedDate } = this.state
    const dueDate = moment(selectedDate).format('L')
    await saveLicence({ id: values.user, dueDate })
    handleClose()
    dispatch(reset('modadAddEdit'))
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  render() {
    const {
      data: { open, handleClose, users },
      handleSubmit,
    } = this.props

    const {selectedDate} = this.state
    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={'md'}
          fullWidth={true}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Licencias de LABOCER SA</DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent>
              <Row>
                <Col md={4}>
                  <label>Usuario</label>
                  <div>
                    <Field
                      name="user"
                      component={renderSelectField}
                      label="User">
                      <option value="">--Seleccione--</option>
                      {users
                        ? users.users.map((user, i) => (
                            <option value={user._id}>{user.email}</option>
                          ))
                        : null}
                    </Field>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  md={4}
                  style={{
                    marginTop: 20
                  }}>
                  <label>Fecha de vencimiento</label>
                  <div>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <DatePicker
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        autoOk={true}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
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
