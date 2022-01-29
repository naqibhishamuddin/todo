import {showMessage} from 'react-native-flash-message';

export const flashMessage = props => {
  const {type, message} = props;

  return showMessage({
    message: message.toString() || 'Error occurred',
    type: type,
  });
};
