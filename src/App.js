import React, { Component } from 'react'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div className='app'>
          
            <div className='app-head'>
              全部分类
            </div>
            <div className='app-body'>
              <div className='home1'>
                 <Home1/>
              </div>
              <div className='home2'>
                 <Home2/> 
              </div>
            </div>
        </div>
    )
  }
}
