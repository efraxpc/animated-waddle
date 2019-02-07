import React, { Component } from 'react'
import { element } from 'prop-types'
import Header from '../shared/components/layout/Header'
import Content from '../shared/components/layout/Content'
import { connect } from 'react-redux'
import './App.css'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

class App extends Component {
  render() {
    const {
      location: { pathname },
      children
    } = this.props
    return (
      <div>
        <div style={{ display: pathname === '/login' ? 'none' : 'block' }}>
          <Header />
        </div>
        <Content>{children}</Content>
      </div>
    )
  }
}

App.propTypes = {
  children: element
}

const mapStateToProps = ({ coins }) => ({
  coins
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
