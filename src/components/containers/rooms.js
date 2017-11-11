import React from 'react'

import { connect } from 'react-redux'
import * as houseAction from '../../actions/house'
import * as inventoryAction from '../../actions/inventory'
import * as rootAction from '../../actions/root'

import EntranceRoom from '../rooms/entrance'
import LeftCorridorRoom from '../rooms/leftCorridor'
import LibraryRoom from '../rooms/library'
import OfficeRoom from '../rooms/officeRoom'

const mapStateToProps = (state, ownProps) => {
  return {
    house: state.house,
    inventory: state.inventory,
    visited: state.house[state.house.currentRoom].visited,
    trans: state.translation[state.translation.lang],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchRoom: room => dispatch(houseAction.houseRoomSwitch(room)),
  unlockRoom: room => dispatch(houseAction.houseRoomUnlock(room)),
  addItemToInvetory: item => dispatch(inventoryAction.inventoryItemAdd(item)),
  resetState: () => dispatch(rootAction.resetState()),
})

const rooms = {
  'entrance': EntranceRoom,
  'leftCorridor': LeftCorridorRoom,
  'library': LibraryRoom,
  'office': OfficeRoom,
}

const Rooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const CurrentRoom = rooms[props.house.currentRoom];
  return <CurrentRoom {...props} />
})

export default Rooms
