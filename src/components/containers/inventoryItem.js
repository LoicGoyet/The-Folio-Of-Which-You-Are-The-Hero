import { connect } from 'react-redux'
import * as inventoryAction from '../../actions/inventory'

import InventoryButton from '../presentational/inventoryButton'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    inventory: state.inventory,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFold: () => dispatch(inventoryAction.inventoryFoldToggle()),
  unsetEmphasis: () => dispatch(inventoryAction.inventoryItemEmphasisUnset()),
})

const InventoryItem = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryButton)

export default InventoryItem