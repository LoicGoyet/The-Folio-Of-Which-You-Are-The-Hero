import { connect } from 'react-redux';
import { path } from 'ramda';

import { setMessageAsRead } from '../../redux/messages';

import MessagesFeed from '../../components/MessagesFeed';

const mapStateToProps = state => {
  const { messages } = state;
  const messageId = messages.allIds.find(id => !messages.byId[id].read);

  return {
    message: path(['byId', messageId], messages),
  };
};

const mapDispatchToProps = dispatch => ({
  onEndReading: id => dispatch(setMessageAsRead(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesFeed);
