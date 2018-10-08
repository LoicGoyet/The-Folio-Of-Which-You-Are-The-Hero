import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  read: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
});
