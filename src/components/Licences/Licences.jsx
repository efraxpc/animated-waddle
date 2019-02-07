import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ModalAddEdit from './ModalAddEdit'
import ListTable from './ListTable'

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
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
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
      licences: licences
    } = this.props
    const { open } = this.state
    return (
      <div>
        <ModalAddEdit
          data={{
            open,
            handleClose: this.handleClose,
            users,
            fetchUsers,
            fetchLicences,
            saveLicence
          }}
        />
        <div
          style={{ position: 'absolute', top: 89, zIndex: 2 }}
          onClick={this.handleClickOpen}>
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            className={classes.margin}>
            <AddIcon />
          </Fab>
        </div>
        <div style={{ marginBottom: 102 }} />
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <ListTable data={licences} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default withStyles(styles)(Licences)
