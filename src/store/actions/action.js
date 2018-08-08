import {ADD,REDUCE,GET} from "../action-types"

export  function add(obj) {
	return {
		type:ADD,
		payload:2
	}
	
}

export  function reduce(obj) {
	return {
		type:REDUCE,
		payload:1
	}
	
}

export function getNum(num) {
	return {
		type:GET,
		payload:num
	}
		
}

export function get() {
	return (dispatch)=>{
       setTimeout(()=>{
       	  dispatch(getNum(10))
       },1000)
   }
	
}

