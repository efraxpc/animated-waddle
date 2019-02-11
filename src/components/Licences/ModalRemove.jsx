import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import { Row, Col } from 'react-bootstrap'

class ModalRemove extends React.Component {
  handleSubmit = e => {
    const {
      data: { removeLicence, licence, handleClose, fetchLicences }
    } = this.props
    const id = licence.licence._id
    removeLicence({id})
    handleClose()
    fetchLicences()
  }
  render() {
    const {
      data: { showModalRemove, handleClose }
    } = this.props
    return (
      <React.Fragment>
        <Dialog
          open={showModalRemove}
          onClose={() => {
            handleClose()
          }}
          maxWidth={'xs'}
          fullWidth={true}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            ¿Realmente desea remover licencias de LABOCER SA?
          </DialogTitle>
          <DialogContent>
            <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <Button
                  onClick={this.handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary">
                  Ok
                </Button>
              </Col>
              <Col md={6}>
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
        </Dialog>
      </React.Fragment>
    )
  }
}

export default ModalRemove
