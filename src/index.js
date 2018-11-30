import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from './store'
import { BrowserRouter } from "react-router-dom";

class AppContainer extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

serviceWorker.unregister();
