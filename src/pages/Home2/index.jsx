import React, { Component } from 'react'
import './style.css'
import Home3 from '../Home3'
import { Switch, Route, Redirect } from 'react-router-dom'


export default class index extends Component {
  render() {
    return (
      <div className='page-home2'>
          <Switch>
              <Route path='/:cid' component={Home3}></Route>
              <Redirect from='/' to='/1'></Redirect>
          </Switch>
         
      </div>
    )
  }
}
