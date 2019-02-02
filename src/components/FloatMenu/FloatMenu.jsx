import React, { Component } from 'react'
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from 'react-floating-button-menu'
import MdAdd from '@material-ui/icons/Add'
import MdClose from '@material-ui/icons/Clear'
import './FloatMenu.css'

class FloatMenu extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div style={{ position: 'absolute', top: 89, zIndex: 2 }}>
        <FloatingMenu
          slideSpeed={500}
          direction="down"
          spacing={8}
          isOpen={this.state.isOpen}>
          <MainButton
            iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
            iconActive={
              <MdClose style={{ fontSize: 20 }} nativeColor="white" />
            }
            className={"mainBottomMenuColor"}
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            size={56}
          />
          {/* <ChildButton
            icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="white" />}
            size={40}
            backgroundColor={"#7CBDD6"}
            onClick={() => console.log('First button clicked')}
          />
          <ChildButton
            icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="white" />}
            backgroundColor={"#7CBDD6"}
            size={40}
          />
          <ChildButton
            icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="white" />}
            backgroundColor={"#7CBDD6"}
            size={40}
          /> */}
        </FloatingMenu>
      </div>
    )
  }
}

export default FloatMenu
