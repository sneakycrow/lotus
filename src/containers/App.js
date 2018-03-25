import React from 'react';
import { hot } from 'react-hot-loader';
import style from './App.scss';

// NOTE: You should route all your containers into this final App container
const App = () => <p className={style.example}>Hello World</p>;

export default hot(module)(App);
