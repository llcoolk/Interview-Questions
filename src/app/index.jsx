import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as actions from './actions'
import { Card, Header, Nav, FlipButton, BackButton, ForwardButton } from './components'

const App = ({ cards, id, next, prev }) => (
  <main className="root">
    <div className="container">
      <Header />
      <Nav />
      <Card type="question">{cards[id].question}</Card>
      <FlipButton />
    </div>
    <BackButton prev={prev} />
    <ForwardButton next={next} />
  </main>
)

App.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = ({ current: { id, set }, cards }) => ({
  cards: cards[set],
  id
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
