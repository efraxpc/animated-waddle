import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ModalAddEdit from './ModalAddEdit'
import ModalRemove from './ModalRemove'
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
    showModalAddEdit: false,
    showModalRemove: false,
    showNotification: false,
    notificationMessage: ''
  }

  handleClickOpenModalAddEdit = async params => {
    const { id } = params
    const { requestShowModal, fetchLicence } = this.props
    await requestShowModal()
    if(id){
      await fetchLicence({id})
    }
    this.setState({ showModalAddEdit: true })
  }

  handleClickOpenModalRemove = async params => {
    const { id } = params
    const { requestShowModal, fetchLicence } = this.props
    await requestShowModal()
    if(id){
      await fetchLicence({id})
    }
    this.setState({ showModalRemove: true })
  }

  handleShowNotification = (params) => {
    this.setState({
      showNotification: true,
      notificationMessage: params.msg 
    })
    setTimeout(() => {
      this.setState({ showNotification: false, notificationMessage: '' })
    }, 3000)
  }

  handleCloseModalAddEdit = async () => {
    const { licences,  requestShowModal } = this.props
    this.setState({ showModalAddEdit: false })
    if (licences.licence.success) {
      this.handleShowNotification({msg:'Licencia creada exitosamente'})
    }
    requestShowModal()
  }

  handleCloseModalRemove = async () => {
    const { licences,  requestShowModal } = this.props
    this.setState({ showModalRemove: false })
    if (licences.licence) {
      this.handleShowNotification({msg:'Licencia eliminada exitosamente'})
    }
    requestShowModal()
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
      removeLicence,
      licences: licences,
      licences: licence
    } = this.props
    const { showModalAddEdit, showModalRemove, showNotification, notificationMessage } = this.state
    return (
      <div>
        <ModalAddEdit
          data={{
            showModalAddEdit,
            handleClose: this.handleCloseModalAddEdit,
            users,
            licence,
            fetchUsers,
            fetchLicences,
            saveLicence,
            updateLicence,
            handleShowNotification: this.handleShowNotification
          }}
        />
        <ModalRemove
          data={{
            fetchLicences,
            removeLicence,
            licence,
            showModalRemove,
            handleClose: this.handleCloseModalRemove,
            handleShowNotification: this.handleShowNotification
          }}
        />
        <div
          style={{ position: 'absolute', top: 89, zIndex: 2 }}
          onClick={this.handleClickOpenModalAddEdit}>
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
                  handleClickOpenModalAddEdit={this.handleClickOpenModalAddEdit}
                  handleClickOpenModalRemove={this.handleClickOpenModalRemove}
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
