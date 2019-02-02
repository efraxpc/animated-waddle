import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withRouter } from "react-router";

class SimpleMenu extends React.Component {
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
    const { subMenus } = this.props.info
    const { children } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const listItems = subMenus.map(menu => (
      <MenuItem onClick={() => {
        this.handleClose()
        this.props.history.push(menu.link)
      }}>{menu.name}</MenuItem>
    ))
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit">
          {children}
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
          {listItems}
        </Menu>
      </div>
    )
  }
}

export default withRouter(SimpleMenu)
