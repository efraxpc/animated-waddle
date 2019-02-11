import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ModalAddEdit from './ModalAddEdit'
import ListTable from './ListTable'
import ProjectSnackbar from '../Snackbar'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
})
class Licences extends Component {
  state = {
    showModal: false,
    showNotification: false,
    notificationMessage: ''
  }

  handleClickOpenModal = async params => {
    const { id } = params
    const { requestShowModal, fetchLicence } = this.props

    await requestShowModal()
    if(id){
      fetchLicence({id})
    }
    this.setState({ showModal: true })
  }

  handleShowNotification = () => {
    this.setState({
      showNotification: true,
      notificationMessage: 'Licencia creada exitosamente'
    })
    setTimeout(() => {
      this.setState({ showNotification: false, notificationMessage: '' })
    }, 3000)
  }

  handleClose = async () => {
    const { licences,  requestShowModal } = this.props
    this.setState({ showModal: false })
    if (licences.licence.success) {
      this.handleShowNotification()
    }
    await requestShowModal()
  }

  async componentWillMount() {
    const { fetchUsers } = this.props
    await fetchUsers()
  }

  async componentDidMount() {
    const { fetchUsers, fetchLicences } = this.props
    await fetchUsers()
    fetchLicences()
  }
  render() {
    const {
      classes,
      users,
      fetchUsers,
      saveLicence,
      fetchLicences,
      updateLicence,
      licences: licences,
      licences: licence
    } = this.props
    const { showModal, showNotification, notificationMessage } = this.state
    return (
      <div>
        <ModalAddEdit
          data={{
            showModal,
            handleClose: this.handleClose,
            users,
            licence,
            fetchUsers,
            fetchLicences,
            saveLicence,
            updateLicence,
            handleShowNotification: this.handleShowNotification
          }}
        />
        <div
          style={{ position: 'absolute', top: 89, zIndex: 2 }}
          onClick={this.handleClickOpenModal}>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            className={classes.margin}>
            <AddIcon />
          </Fab>
        </div>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div
              style={{ display: showNotification === true ? 'block' : 'none' }}>
              <ProjectSnackbar
                variant="success"
                message={notificationMessage}
                style={{
                  position: 'absolute',
                  maxWidth: 1160,
                  width: '100%',
                  top: 27
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ marginBottom: 102 }} />
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <ListTable
                  data={licences}
                  handleClickOpenModal={this.handleClickOpenModal}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withStyles(styles)(Licences)
