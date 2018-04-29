import React,{Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import LoginScreen from './Component/LoginScreen';
import RouteStack from './RouteStack.js';
import { setNavigator } from './services/navigator';


import reducers from './reducers';

export default class Main extends Component{

    render(){ 
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
    
        return (
            <Provider store={store}>
            <RouteStack ref={nav => { setNavigator(nav); }}/>
             </Provider>
        );
     
    }
}