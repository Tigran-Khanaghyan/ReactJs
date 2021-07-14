import React from "react"


export class Counter extends React.Component {
 constructor(props){
      super(props)

      this.state = {
        value : ''
      }
      this.handleInputChange = this.handleInputChange.bind(this)
      this.increaseInputValue = this.increaseInputValue.bind(this)
      this.decreaseInputValue = this.decreaseInputValue.bind(this)

 }
 handleInputChange(event){
    this.setState({value: event.target.value})
 }
 increaseInputValue(){
     this.setState((previousState) => {
        return {
            value: Number(previousState.value) + 1
        }
     })
 }
 decreaseInputValue(){
    this.setState((previousState) => {
       return {
           value: Number(previousState.value) - 1 
       }
    })
}

 render() {
     return (
        <div>
            <input type='number' value={this.state.value} onChange={this.handleInputChange}/>
            <button value='increase' onClick={this.increaseInputValue}>Increase</button>
            <button value='Decrease' onClick={this.decreaseInputValue}>Decrease</button>
            <button value='Reset' >Reset</button>
        </div>

     )
 }
}