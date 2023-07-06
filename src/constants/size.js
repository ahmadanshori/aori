import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default {
  opacity: 0.8,
  height,
  width,
  width0: width / 1.15,
  width1: width / 1.5,
  width2: width / 2,
  width3: width / 3,
  shadow: {
    elevation: 2,
    shadowOffset: {height: 0, width: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
};
