import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addDropdown, selectElement, unselectElement } from './actions/dropdown'

import Dropdown from './components/complete/dropdown'
import ContactCard from './components/elementary/ContactCard'

import styles from './styles'

const dropdownName = 'contact-list'
const contactCards = [
  {
    id: 0,
    name: 'Ruslan',
    email: 'gwyn.artstyle@gmail.com',
    avatar: 'imgs/ruslan.jpg'
  },
  {
    id: 1,
    name: 'Emma Watson',
    email: 'emma.watson@gmail.com',
    avatar: 'imgs/emma-watson.jpg'
  },
  {
    id: 2,
    name: 'MobilUnity',
    email: 'contact@mobilunity.com',
    avatar: 'imgs/mobilunity.png'
  },
]

class App extends Component {
  
  componentWillMount () {
    this.props.addDropdown({ id: dropdownName})
  }

  handleClick (element) {
    const {
        dropdownState, 
        selectElement, 
        unselectElement } = this.props,
        newState = {
          id: dropdownName,
          element: element
        }

    if(dropdownState[dropdownName].selected[element.id]) {
      unselectElement(newState)
    } else {
      selectElement(newState)
    }
  }

  genereteTextOfSelector () {
    const {dropdownState} = this.props,
      dropdown = dropdownState[dropdownName],
      defaultRes = 'Select contacts'

    if(!dropdown) return defaultRes

    const size = Object.keys(dropdown.selected).length

    if(!size) return defaultRes
    if(size === 1) return `1 contact selected`
    return `${size} contacts selected`
  }

  render() {
    const {
      dropdownState
    } = this.props

    return (
      <div className={`App ${styles.page}`}>
        <div>
          <Dropdown
            listClassName = {styles.container}
            Trigger = {() => <div className = {styles.triggerBtn}> {this.genereteTextOfSelector()} </div>}>
            {
              contactCards.map(card => 
                <ContactCard
                  key = {card.id}
                  name = {card.name}
                  email = {card.email}
                  avatar = {card.avatar}
                  selected = {dropdownState[dropdownName] ? 
                    dropdownState[dropdownName].selected[card.id] && true
                    : null}
                  onClick = {() => this.handleClick(card)}
                />)
            }
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dropdownState: state.dropdownReducer
  }
}

const mapDispatchToProps =  {
    addDropdown,
    selectElement,
    unselectElement
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)
