import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as actions from './actions'
import { Card, Header, Nav, FlipButton, BackButton, ForwardButton } from './components'

class App extends Component {
  static propTypes = {
    flipped: PropTypes.bool.isRequired,
    getCurrent: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.getCurrent()
  }

  render() {
    const { flipped, next, prev, question, type } = this.props
    return (
      <main className="root">
        <div className="container">
          <Header />
          <Nav />
          <Card flipped={flipped} type={type}>{question}</Card>
          <FlipButton />
        </div>
        <BackButton prev={prev} />
        <ForwardButton next={next} />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = ({ current: { flipped, question, type } }) => ({
  flipped,
  question,
  type
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
