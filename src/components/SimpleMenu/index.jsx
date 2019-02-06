import { connect } from 'react-redux'
import { loginUser } from '../../actions/usersActions'
import { bindActionCreators } from 'redux'
import Cookies from 'universal-cookie'
import SimpleMenu from './SimpleMenu'


const mapStateToProps = ({ coins }) => ({
  coins
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginUser
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleMenu)
