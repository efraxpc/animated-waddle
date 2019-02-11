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
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import _ from 'lodash'

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
    selectedDate: new Date(),
    isActive: false,
    isEdit: false,
    userSelectState: '',
    _id:''
  }
  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }
  onSubmit = async values => {
    const {
      dispatch,
      reset,
      data: { saveLicence, handleClose, fetchLicences, updateLicence }
    } = this.props
    const { selectedDate, isActive, userSelectState, isEdit, _id } = this.state
    const dueDate = moment(selectedDate).format('L')
    if (isEdit===false) {
      await saveLicence({
        user: userSelectState,
        dueDate,
        isActive
      })
    } else {
      updateLicence({
        user: userSelectState,
        dueDate,
        isActive,
        _id
      })
    }

    handleClose()
    fetchLicences()
    dispatch(reset('modadAddEdit'))
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  habdleCloseModal= ()=>{
    this.setState({
      selectedDate: new Date(),
      isActive: false,
      isEdit: false,
      userSelectState: ''
    })
  }
  render() {
    const {
      data: { showModal, handleClose, users, licence },
      handleSubmit
    } = this.props
    const { userSelectState, isActive, selectedDate } = this.state
    return (
      <React.Fragment>
        <Dialog
          onEntered={async () => {
            await this.setState({isEdit:false})
            if (!_.isEmpty(licence.licence)) {
              console.log('esta lleno');
              this.setState({
                isActive: licence.licence.isActive,
                isEdit: true,
                selectedDate: licence.licence.dueDate,
                userSelectState: licence.licence.user,
                _id: licence.licence._id
              })
              console.log(this.state);
            }
          }}
          open={showModal}
          onClose={()=>{
            handleClose()
          }}
          maxWidth={'md'}
          fullWidth={true}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Licencias de LABOCER SA
          </DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent>
              <Row>
                <Col md={4}>
                  <label>Usuario</label>
                  <div>
                    <FormControl style={{ minWidth: 120 }}>
                      <InputLabel htmlFor="userSelectValue-simple">
                        Seleccione
                      </InputLabel>
                      <Select
                        value={userSelectState}
                        onChange={this.handleChangeSelect}
                        inputProps={{
                          name: 'userSelectState',
                          id: 'user-simple'
                        }}>
                        {users
                          ? users.users.map((user, i) => (
                              <MenuItem value={user._id}>{user.email}</MenuItem>
                            ))
                          : null}
                      </Select>
                    </FormControl>
                  </div>
                </Col>
                <Col md={2}>
                  <label>Opciones</label>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={isActive}
                          onChange={this.handleChange('isActive')}
                          value={isActive}
                          color="secondary"
                          name={'atention'}
                        />
                      }
                      label="Activo"
                    />
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
