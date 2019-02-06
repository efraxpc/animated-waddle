import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Licences from './Licences'
import { fetchUsers } from '../../actions/usersActions'
import { saveLicence } from '../../actions/licencesActions'

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
      saveLicence
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Licences)
