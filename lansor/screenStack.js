import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './screens/login';
import Register from './screens/register';
import CustomerProfile from './screens/customerProfile';
import CustomerCarDetails from './screens/customerCarDetails';
import CustomerInitOrder from './screens/customerInitOrder';
import CustomerServiceOptions from './screens/customerServiceOptions';
import CustomerImageUpload from './screens/customerImageUpload';
import TechnicianProfile from './screens/technicianProfile';
import TechnicianOrders from './screens/technicianOrders';
import TechnicianOrderHistory from './screens/technicianOrderHistory';




const screens = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  CustomerProfile: {
    screen: CustomerProfile,
  },
  CustomerCarDetails: {
    screen: CustomerCarDetails,
  },
  CustomerInitOrder: {
    screen: CustomerInitOrder,
  },
  CustomerServiceOptions: {
    screen: CustomerServiceOptions,
  },
  CustomerImageUpload: {
    screen: CustomerImageUpload,
  },
  TechnicianProfile: {
    screen: TechnicianProfile,
  },
  TechnicianOrders: {
    screen: TechnicianOrders,
  },
  TechnicianOrderHistory: {
    screen: TechnicianOrderHistory,
  },
};

// home stack navigator screens
const ScreenStack = createStackNavigator(screens);

export default createAppContainer(ScreenStack);