import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Menu from '../../components/Menu';
import { readItemMessage } from '../../redux/items';

const mapStateToProps = state => {
  const { items } = state;
  const inventoryItemsId = items.allIds.filter(id => items.byId[id].inInventory);

  return {
    items: {
      allIds: inventoryItemsId,
      byId: inventoryItemsId.reduce(
        (acc, id) => ({
          ...acc,
          [id]: items.byId[id],
        }),
        {}
      ),
    },
  };
};

const mapDispatchToProps = dispatch => ({
  onItemClick: bindActionCreators(readItemMessage, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
