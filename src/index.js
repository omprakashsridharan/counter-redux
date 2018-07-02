import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

function reducer(state={count:0},action){
    switch(action.type){
        case 'INC':
            return {
                count:state.count+1
            }
        case 'DEC':
            return {
                count: state.count-1
            }
        default:
            return state
    }
}

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
