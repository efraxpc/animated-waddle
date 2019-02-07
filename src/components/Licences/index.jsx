import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Licences from './Licences'
import { fetchUsers } from '../../actions/usersActions'
import { saveLicence, fetchLicences } from '../../actions/licencesActions'

const mapStateToProps = ({ users, licences }) => ({
  users,
  licences
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      fetchLicences,
      saveLicence
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licences)