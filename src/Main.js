import React,{Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import LoginScreen from './Component/LoginScreen';
import RouterLogin from './RouterLogin.js';



import reducers from './reducers';

export default class Main extends Component{

    render(){ 
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
            <RouterLogin/>
             </Provider>
        );
     
    }
}