import { AppRegistry } from 'react-native';
import Main from './src/Main';
//import RegisterOneStepScreen from './src/Component/RegisterOneStepScreen';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('bicafemobile1', () => Main);
