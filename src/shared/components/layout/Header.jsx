import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SimpleMenu from '../../../components/SimpleMenu'
import { FaCogs, FaFileAlt, FaHome } from 'react-icons/fa'
import { withRouter } from 'react-router'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}
const menuContentConfig = {
  name: 'config',
  subMenus: [{
    name:'Grupos',
    link: '/groups',
  }]
}
const menuContentConfigLicences = {
  name: 'licences',
  subMenus: [{
    name:'Licencias',
    link: '/licences',
  }]
}


class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <a href="#"
            onClick={(e)=>{
              e.preventDefault()
              this.props.history.push('/')
            }}
            >
            <FaHome size={'2em'} 
            color={"white"}/>
            </a>
{/*             <SimpleMenu info={menuContentConfig}>
              <FaCogs />
            </SimpleMenu> */}
            <SimpleMenu info={menuContentConfigLicences}>
              <FaFileAlt />
            </SimpleMenu>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(Header))
