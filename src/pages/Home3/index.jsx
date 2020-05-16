import React, { Component } from 'react'
import './style.css'
import Axios from 'axios'

export default class index extends Component {
  state={
    arr:[]
  }
  componentDidMount(){
    Axios.get('./category.json').then(res=>{
      this.setState({
        arr:res.data.List
      })
    })
  }
  render() {
    const cid=this.props.match.params.cid
    const {arr}=this.state
    // console.log(cid)
    const data=arr.filter(v=>{
      return v.cate_id==cid
    })
    // console.log(data)

    
    return (
      
      <div className='page-home3'>
      {
        data.map(v=>{
          return(
          v.children.map(v=>{
            // console.log(v)
            return(
              
                <div className='page-home3-child' key={v.child_id}>
                    <img src={v.picture}></img>
                    <p>{v.name}</p>
                </div>
            )
          })
          )
        })
      }
         
      </div>
    )
  }
}
