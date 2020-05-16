import React, { Component } from 'react'
import Axios from 'axios'
import { NavLink, Switch, Route } from 'react-router-dom'
import './style.css'


export default class index extends Component {
  state={
    arr:[]
  }
  componentDidMount(){
    Axios.get('./category.json').then(res=>{
      // console.log(res.data.List)
      this.setState({
        arr:res.data.List
      })
    })
  }
  render() {
    return (
      <div className='pages-home1'>
      {
        this.state.arr.map(v=>{
          return (
            <NavLink to={`/${v.cate_id}`} key={v.cate_id}>
             <div className='pages-home1-child'>
                {v.cate_name}
              </div>
            </NavLink>
              
          )
        })
      }
      </div>
    )
  }
}
