import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Licences from './Licences'
import { fetchUsers } from '../../actions/usersActions'
import {
  saveLicence,
  fetchLicences,
  requestShowModal,
  fetchLicence,
  updateLicence,
  removeLicence
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
      updateLicence,
      removeLicence
    },
    dispatch
  )

  export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licences)
