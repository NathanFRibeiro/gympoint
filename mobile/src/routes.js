import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Checkin from './pages/Checkin';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Checkin,
  })
);
