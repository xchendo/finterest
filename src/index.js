import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Finterest from './components/Finterest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Finterest />, document.getElementById('root'));
registerServiceWorker();
