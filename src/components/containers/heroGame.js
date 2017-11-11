import React from 'react'

import { connect } from 'react-redux'
import * as houseAction from '../../actions/house'
import * as inventoryAction from '../../actions/inventory'

// import LangPicker from './langPicker'
import Rooms from './rooms'
import Inventory from './inventory'

const mapStateToProps = (state, ownProps) => {
  return {
    house: state.house,
    inventory: state.inventory,
    visited: state.house[state.house.currentRoom].visited,
    lang: state.translation.lang,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchRoom: room => dispatch(houseAction.houseRoomSwitch(room)),
  unlockRoom: room => dispatch(houseAction.houseRoomUnlock(room)),
  addItemToInvetory: item => dispatch(inventoryAction.inventoryItemAdd(item)),
})

const HeroGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  return (
    <div>
      {/* <LangPicker/> */}
      <Inventory/>
      <Rooms/>
    </div>
  );
})

export default HeroGame