import { connect } from 'react-redux';

import Screen from '../../components/Screen';

const mapStateToProps = state => {
  const { rooms } = state;

  return {
    activeRoom: rooms.active,
    illustration: rooms.byId[rooms.active].illustration,
  };
};

export default connect(mapStateToProps)(Screen);
