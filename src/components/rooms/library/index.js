import React, { Component } from 'react'
import Room from '../../presentational/room'
import Button from '../../presentational/button'
import ButtonGroup from '../../presentational/buttonGroup'

class LibraryRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: false,
    }

    this.itemToPick = 'officeKey'
  }

  get alreadyPickItem() {
    const { inventory } = this.props
    return inventory.items.indexOf(this.itemToPick) >= 0
  }

  render() {
    const { switchRoom, addItemToInvetory } = this.props
    const { drawerOpen } = this.state

    return (
      <Room
        {...this.props}
        title="Library"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore sapiente nisi, quos culpa aut dolor nostrum nulla explicabo quod deleniti eveniet, impedit, omnis animi fuga, quis dicta perspiciatis libero recusandae!</p>

        <ButtonGroup>
          {!drawerOpen && !this.alreadyPickItem && (
            <Button onClick={e => this.setState({drawerOpen: true})}>Open the drawer</Button>
          )}

          {drawerOpen && !this.alreadyPickItem && (
            <Button onClick={e => addItemToInvetory(this.itemToPick)}>Take the key</Button>
          )}

          <Button onClick={e => switchRoom('leftCorridor')}>Go to corridor left</Button>
        </ButtonGroup>
      </Room>
    )
  }
}

export default LibraryRoom