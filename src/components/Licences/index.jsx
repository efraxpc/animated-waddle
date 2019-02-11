import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Licences from './Licences'
import { fetchUsers } from '../../actions/usersActions'
import {
  saveLicence,
  fetchLicences,
  requestShowModal,
  fetchLicence,
  updateLicence
} from '../../actions/licencesActions'

const mapStateToProps = ({ users, licences, notification }) => ({
  users,
  licences,
  notification
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      fetchLicences,
      saveLicence,
      requestShowModal,
      fetchLicence,
      updateLicence
    },
    dispatch
  )

  export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licences)
