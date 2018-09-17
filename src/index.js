import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

let render=()=>{
    ReactDOM.render(<App/>,root)
}
if(module.hot){
    module.hot.accept('./app/layout/App',()=>{
        setTimeout(render)
    })
}
render();
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
