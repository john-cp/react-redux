import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import store from './store/store';
import {add,reduce,get} from "./store/actions/action"

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: "redux",
       // num:0,
    }  
    this.inputFocus = React.createRef(); // Create a ref to store the textInput DOM element
  }
  componentWillMount(){
    this.props.dispatch(get())
    console.log(this.props)
  }
  componentDidMount(){
    // we're accessing "current" to get the DOM node
    this.inputFocus.current.focus()//自动获取焦点
  }
  add (attr) {
    // this.setState({num:this.state.num + 1})
    this.props.dispatch(add())
  }
  reduce (attr) {
    if (this.props.num > 0)
      this.props.dispatch(reduce())
    else {
      alert("混蛋住手")
    }
  }  
  render () {
    let {num,text} = this.props
    return (
        <div className="App">        
          <p className="App-intro">
            {this.state.name}学习
          </p>
          <p>{num}</p><p>{text}</p>
          <div>
            <i onClick={this.add.bind(this,5)} className="App-add">加</i>
            <i onClick={this.reduce.bind(this,3)} className="App-reduce">减</i>
          </div>
          <div>-----------------------------</div><br/>
          <div><label>name:<input type='text' ref={this.inputFocus} /></label></div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({num:state.count,text:state.message})//state是store映射到当前容器组件的props对象，count为子reducer

export default connect(mapStateToProps)(App);
