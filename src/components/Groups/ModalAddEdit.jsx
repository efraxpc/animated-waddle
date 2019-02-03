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
import ColorPick from '../ColorPickr'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

const CustomTextField = ({ input, label, type }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="email">{label}</InputLabel>
    <Input type={type} {...input} />
  </FormControl>
)

class ModalAddEdit extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true
  }
  onSubmit = values => {
    console.log(values);
    console.log(this.state);
    const { loginAction, dispatch, reset } = this.props
    dispatch(reset('todo'))
    //loginAction(values)
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const {
      data: { open, handleClose },
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
                  <Field
                    name="name"
                    type="text"
                    component={CustomTextField}
                    label="Nombre"
                  />
                </Col>
                <Col md={6}>
                  <label>Color</label>
                  <div>
                    <ColorPick />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label>Descripción</label>
                  <div>
                    <Field
                      name="description"
                      component="textarea"
                      style={{ width: 818 }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <label>Tipo de alarma</label>
                  <div>
                    <Row>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedB}
                              onChange={this.handleChange('checkedB')}
                              value="checkedB"
                              color="secondary"
                              name={'atention'}
                            />
                          }
                          label="Atención"
                        />
                      </Col>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedB}
                              onChange={this.handleChange('checkedB')}
                              value="checkedB"
                              color="secondary"
                            />
                          }
                          label="Geozona"
                        />
                      </Col>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedC}
                              onChange={this.handleChange('checkedC')}
                              value="checkedC"
                              color="secondary"
                            />
                          }
                          label="Bateria baja"
                        />
                      </Col>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedD}
                              onChange={this.handleChange('checkedD')}
                              value="checkedD"
                              color="secondary"
                            />
                          }
                          label="GPS desactivado"
                        />
                      </Col>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedE}
                              onChange={this.handleChange('checkedE')}
                              value="checkedE"
                              color="secondary"
                            />
                          }
                          label="GPS activado"
                        />
                      </Col>
                      <Col md={2}>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.checkedF}
                              onChange={this.handleChange('checkedF')}
                              value="checkedF"
                              color="secondary"
                            />
                          }
                          label="Correo electrónico"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 2, offset: 8 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}>
                    Cancelar
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Guardar
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
