import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';
import zomatoReducer from './store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	zomatoReducer: zomatoReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
        	<ScrollToTop>
            	<App />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

