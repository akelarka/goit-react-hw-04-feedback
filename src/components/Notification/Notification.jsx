import PropTypes from 'prop-types';
import { FeedbackNotification } from './Notification.styled';

const Notification = ({ message }) => {
  return <FeedbackNotification>{message}</FeedbackNotification>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
